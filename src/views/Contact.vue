<template>
  <div class="form">
    <form
      action="https://www.enformed.io/ipe4xnt4"
      method="POST"
      _lpchecked="1"
    >
      <div>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" v-model="name" />
        <span v-if="error_msg.name">{{ error_msg.name }}</span>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Your email"
          v-model="email"
        />
        <span>{{ error_msg.email }}</span>
      </div>
      <div>
        <label>Message</label>
        <input
          type="text"
          name="message"
          placeholder="Your desired message"
          v-model="message"
        />
        <span>{{ error_msg.message }}</span>
      </div>
      <div class="submit">
        <span @click="submitForm" type="submit" class="btn">Submit</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: undefined,
      email: undefined,
      message: undefined,
      error_msg: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("setFooterAbsolute", "absolute");
  },
  methods: {
    submitForm() {
      let form = document.querySelector("form");
      let { name, email, message } = this;

      if (name && email && message) {
        form.submit();
      } else {
        if (!name) {
          return (this.error_msg.name = "Enter your name");
        } else {
          this.error_msg.name = undefined;
        }

        if (!email) {
          return (this.error_msg.email = "Enter your email");
        } else {
          this.error_msg.email = undefined;
        }

        if (!message) {
          return (this.error_msg.message = "Enter your message");
        } else {
          this.error_msg.message = undefined;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 500px;
  margin: 40px auto;
  padding: 0 8px;
}

.form form div {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.form form div label {
  color: #4d4d4d;
  font-size: 18px;
  margin-bottom: 4px;
}

.form form div input {
  padding: 10px 5px;
  background: #ffffff;
  color: #4d4d4d;
  border: 1px solid #ababab;
  font-weight: 700;
  font-size: 14px;
}

.btn {
  position: relative;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  color: #bdbdbd;
  background: #1b1b1b;
  font-size: 18px;
  padding: 2px 30px;
  margin: 0 5px;
  box-shadow: 0 3px #964343;
  cursor: pointer;
  user-select: none;
  box-sizing: border-box;

  &:active {
    bottom: -1px;
    box-shadow: 0 1px #060606;
  }
}

.form form .submit > span {
  border: none;
  color: #ffd4b6;
  padding: 10px;
  margin: 0;
  text-align: center;
}
</style>
