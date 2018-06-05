<template>
  <div class="table-data">
    <el-table
      :data="tableData"
      style="width: 100%">
      <template
        v-for="(c, cIndex) in column">
        <el-table-column
          :key="cIndex"
          :prop="c.key"
          :label="c.label"
          :width="c.width">
        </el-table-column>
      </template>

    </el-table>

    <el-pagination
      v-if="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pp-table',
  props: {
    ds: {
      type: Object,
      default: () => {}
    },
    column: {
      type: Array,
      default: () => {}
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
  created () {
    console.log(this.column)
    this.ds ? this.GET_DS_DATA(this.ds)
      .then(res => {
        this.tableData = res.data
      }) : this.$notify.warning('ds 数据不存在')
  },
  data () {
    return {
      tableData: [],
      currentPage: 1,
      total: 100
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .el-pagination
    text-align right
    padding 10px 0
</style>
