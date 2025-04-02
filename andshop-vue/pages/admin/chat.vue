<template>
    <div class="container pt-5">
      <h2>Admin Chat Paneli</h2>
  
      <div class="row">
        <!-- Sol taraf: Kullanıcı listesi -->
        <div class="col-md-4">
          <ul class="list-group">
            <li
              v-for="(msgs, user) in messages"
              :key="user"
              @click="selectUser(user)"
              :class="['list-group-item', { active: selectedUser === user }]"
            >
              {{ user }}
            </li>
          </ul>
        </div>
  
        <!-- Sağ taraf: Seçili kullanıcı ile mesajlaşma -->
        <div class="col-md-8" v-if="selectedUser">
          <div class="chat-box border p-3 mb-3">
            <div
              v-for="(msg, index) in messages[selectedUser]"
              :key="index"
              class="mb-2"
            >
              <strong>{{ msg.user }}:</strong> {{ msg.message }}
            </div>
          </div>
  
          <input
            v-model="newMessage"
            placeholder="Mesaj yaz..."
            class="form-control mb-2"
          />
          <button @click="sendMessage" class="btn btn-primary">Gönder</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import connection from "@/plugins/signalr";
  
  export default {
    data() {
      return {
        messages: {}, // { user1: [], user2: [] }
        selectedUser: null,
        newMessage: "",
      };
    },
    mounted() {
      connection
        .start()
        .then(() => {
          console.log("SignalR admin bağlı");
  
          connection.on("ReceiveMessage", (user, message) => {
            // Eğer bu kullanıcı için liste yoksa oluştur
            if (!this.messages[user]) {
              this.$set(this.messages, user, []);
            }
            // Mesajı ekle
            this.messages[user].push({ user, message });
          });
        })
        .catch((err) => {
          console.error("SignalR bağlantı hatası:", err);
        });
    },
    methods: {
      selectUser(user) {
        this.selectedUser = user;
      },
      sendMessage() {
        if (!this.selectedUser || !this.newMessage) return;
  
        connection.invoke("SendMessage", "Admin", this.newMessage);
        this.messages[this.selectedUser].push({
          user: "Admin",
          message: this.newMessage,
        });
        this.newMessage = "";
      },
    },
  };
  </script>
  
  <style scoped>
  .chat-box {
    height: 400px;
    overflow-y: scroll;
    background: #f8f9fa;
  }
  .list-group-item {
    cursor: pointer;
  }
  </style>
  