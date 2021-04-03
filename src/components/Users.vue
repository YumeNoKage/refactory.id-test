<template>
  <div class="main">
    <div class="main-title">{{ msg }}</div>
    <div class="user-count">
      <div class="count">{{ count }}</div>
      Users
    </div>

    <div class="wrapper" v-if="users !== null">
      <!-- initial code -->
      <!-- <div class="wrapper"> -->
      <div v-for="user in users" :key="user.name" class="card">
        <div class="body-card">
          <div class="title">Name</div>
          <div class="name">{{ user.name }}</div>
          <div class="wrapper-card">
            <div>
              <div class="title">Email</div>
              <div class="email">{{ user.email }}</div>
            </div>
            <div>
              <div class="title">Phone</div>
              <div class="phone">{{ user.phone }}</div>
            </div>
            <div>
              <div class="title">Website</div>
              <div class="website">{{ user.website }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// initial Code
// import axios from "axios";
// import { mapState } from "vuex";
// import { INCREMENT } from "../mutation-types";

export default {
  name: "Users",
  props: {
    msg: String,
  },

  data() {
    return {
      users: null,
      count: null,
    };
  },

  computed: {
    ...mapGetters({
      getData: "getData",
      // getCountData: "getCountData",
    }),

    // initial code
    // users() {
    //   return this.$store.getters.getData;
    // },
    // count() {
    //   return this.$store.getters.getCountData;
    // },
  },

  mounted() {
    this.setData();

    // initial code
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     this.setData(response.data);
    //   })
    //   .catch(() => (this.loading = false));
  },
  methods: {
    ...mapActions({
      setDatas: "setDatas",
    }),

    setData: async function () {
      const response = await this.setDatas();
      this.users = response.data;

      const size = Object.entries(this.users);
      this.count = size.length;
    },

    // initial code
    // setData(data) {
    //   this.$store.dispatch("setData", data);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");

.main {
  background-color: #f5f7fa;
  padding: 10px;
}

.main-title {
  padding-top: 3rem;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.count {
  color: #83dd8b;
  font-weight: 800;
  margin-right: 10px;
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
}
.user-count {
  border-bottom: 1px solid #e1e1e7;
  color: #646464;
  display: flex;
  font-family: "Quicksand", sans-serif;
  font-size: 1.5rem;
  margin-top: 5px;
}

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.card {
  width: 50%;
  min-width: 500px;
}
.body-card {
  padding: 1.5rem;
  background-color: white;
  margin: 0.5rem;
  border-radius: 5px;
}

.wrapper-card {
  display: flex;
  margin-top: 15px;
}

.wrapper-card div:nth-child(2),
.wrapper-card div:nth-child(3) {
  margin-left: auto;
}

.title {
  font-size: 1rem;
  color: #e3e3e8;
  margin-bottom: 10px;
}

.name {
  color: #646464;
  font-size: 1.3rem;
  font-weight: 600;
  margin-left: 0px !important;
}
.email,
.phone {
  color: #030303;
  margin-left: 0px !important;
  font-family: "Quicksand", sans-serif;
}

.website {
  color: #83dd8b;
  font-weight: 600;
  margin-left: 0px !important;
}

@media screen and (max-width: 768px) {
  .wrapper {
    display: block;
  }
  .card {
    width: 100% !important;
    min-width: none;
  }
}
</style>
