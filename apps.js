new Vue({
  el: "#app",
  data() {
      return {
        add: "",
        objek: [],
        cari: "",
      };
    },
    methods: {
      enter: function () {
        this.objek.push({
          activity: this.add,
          disable: true,
        });
        this.add = "";
      },
      edit(index, val) {
        if (val == true) {
          this.objek[index].disable = false;
        } else {
          this.objek[index].disable = true;
        }
      },
      hapus(index) {
        Vue.delete(this.objek, index);
      },
      clear() {
        this.objek = [];
      },
    },
    computed: {
      pencarian: function () {
        return this.objek.filter((list) => {
          return list.activity.match(this.cari);
        });
      },
    },
  })
