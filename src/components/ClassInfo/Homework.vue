<template>
  <div>
    <el-table
      :data="problemFilter(classProblems)"
      :default-sort="{ prop: 'id', order: 'ascending' }"
      border
      style="width: 90%; margin: auto"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
      v-el-table-infinite-scroll="load"
      :infinite-scroll-disabled="disabled"
      infinite-scroll-delay="200"
      infinite-scroll-immediate
      height="500px"
    >
      <el-table-column label="题目ID" prop="id" min-width="10%" sortable></el-table-column>
      <el-table-column label="题目标题" prop="title" min-width="27%"></el-table-column>
      <el-table-column label="通过人数/提交人数" min-width="15%">
        <template slot-scope="scope"> {{ scope.row.acUserNum }}/{{ scope.row.subUserNum }} </template>
      </el-table-column>
      <el-table-column label="总通过数/总提交数" min-width="15%">
        <template slot-scope="scope"> {{ scope.row.acNum }}/{{ scope.row.subNum }} </template>
      </el-table-column>
      <el-table-column label="难度" prop="difficulty" min-width="8%"></el-table-column>
      <el-table-column label="题目标签" min-width="15%">
        <template slot-scope="scope">
          <el-tag v-for="tag in scope.row.tags" :key="tag" size="mini" class="problem-tag">{{ tag }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="通过状态" min-width="10%">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status != 2" :type="getStatusType(scope.row.status)">{{
            getStatusText(scope.row.status)
          }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import ElTableInfiniteScroll from "el-table-infinite-scroll";

export default {
  name: "Homework",
  directives: {
    "el-table-infinite-scroll": ElTableInfiniteScroll,
  },
  data() {
    return {
      classId: this.$route.query.classId,
      classProblems: [],
      curPage: 1,
      limit: 10,
      disabled: false,
      userId: 123,
      userLevel: -1, // 班级成员 0，管理员 1，创建者 2 非班级成员 -1
    };
  },
  async mounted() {
    // FIXME where can we get `this.userId`?
    await axios.get("/class/" + this.classId + "/user/" + this.userId + "/isClassMember", {}).then(res => {
      this.userLevel = res.data.data;
      // this.userLevel = 0;
    });

    if (this.userLevel == -1) {
      this.$message.error("您不是班级成员，无法查看作业");
    } else {
      axios
        .get("/class/" + this.classId + "/problem", {
          params: {
            page: 1,
            limit: this.limit,
          },
        })
        .then(res => {
          if (res.data.data.length < this.limit || this.userLevel == -1) {
            this.disabled = true;
          }
          console.log("prr", res);
          this.classProblems = res.data.data;
          console.log(this.classProblems);
        });
    }
  },
  methods: {
    getStatusType(status) {
      if (status == 0) return "info";
      if (status == 1) return "warning";
      return "";
    },
    getStatusText(status) {
      if (status == 0) return "通过";
      if (status == 1) return "未通过";
    },
    load() {
      if (this.disabled) return;

      this.curPage++;
      axios
        .get("/class/" + this.classId + "/problem", {
          params: {
            page: this.curPage,
            limit: this.limit,
          },
        })
        .then(res => {
          if (res.data.data.length < this.limit) {
            this.disabled = true;
          }
          this.classProblems = this.classProblems.concat(res.data.data);
          console.log(this.classProblems);
        });
    },
    problemFilter(problems) {
      switch (this.userLevel) {
        case -1:
          return [];
        case 0:
          return problems.filter(problem => problem.access != "private");
        default:
          return problems;
      }
    },
  },
};
</script>

<style scoped>
.problem-tag {
  margin-right: 5px;
}
</style>
