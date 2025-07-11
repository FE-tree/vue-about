<template>
    <div id="magnetic" class="app-container">
        <div class="head">
            <el-input placeholder="请输入内容：例如 蜘蛛侠" v-model="listQuery.k" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="curTable(1)">搜索</el-button>
            </el-input>
        </div>
        <div class="main">
            <!--<el-tabs v-model="activeName" type="card" @tab-click="handleClick">-->
                <!--<el-tab-pane label="用户管理" name="first"></el-tab-pane>-->
                <!--<el-tab-pane label="配置管理" name="second"></el-tab-pane>-->
                <!--<el-tab-pane label="角色管理" name="third"></el-tab-pane>-->
                <!--<el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>-->
            <!--</el-tabs>-->

            <div class="filter-container">
                <el-select v-model="listQuery.s" placeholder="请选择" size="small" @change="changeSort">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <div class="pagination">
                    <el-pagination background layout="prev, pager, next" :page-size="10" :total="list.total" @current-change="curTable" class="pagination"></el-pagination>
                </div>
            </div>

            <el-table
                    v-loading="listLoading"
                    :data="list.data"
                    stripe border
                    :header-cell-style="{textAlign:'center'}"
                    @selection-change="handleSelectionChange"
                    style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column type="index" :index="(index)=> index+1" align="center"></el-table-column>
                <el-table-column label="名称">
                    <template slot-scope="scope">
                        <a :href="scope.row.uri" class="url" v-html="getName(scope.row.highlight.name[0])"></a>
                    </template>
                </el-table-column>
                <el-table-column prop="file_size" label="大小" width="100" align="center"></el-table-column>
                <el-table-column prop="hot" label="人气" width="100" align="center"></el-table-column>
                <el-table-column label="发布时间" width="150" align="center">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span>{{ scope.row.time }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="150" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                listQuery: {
                    k: '',
                    p: 1,
                    s: 'hot'
                },
                options: [{
                    value: 'hot',
                    label: '下载热度'
                }, {
                    value: 'ai',
                    label: '默认排序'
                }, {
                    value: 'time',
                    label: '更新时间'
                }],
                listLoading: false,
                activeName: 'first',
                list: {
                    data: [],
                    total: 0
                },
                multipleSelection: []
            }
        },
        filters: {
            nameFilter(name) {
                console.log(name)
                return name.replace(this.keyword, '<span>'+this.keyword+'</span>')
            }
        },
        methods: {
            getData() {
                this.listLoading = true
                this.axios.get('/api/search/ciliwang', {
                    params: this.listQuery
                }).then((res) => {
                    this.listLoading = false
                    this.list = res.data.data
                    console.log(this.list)
                }).catch((err) => {
                    console.log('ciliwang: ', err)
                })
            },
            curTable(val) {
                if(!this.listQuery.k) this.listQuery.k = '蜘蛛侠'
                this.listQuery.p = val
                this.getData()
            },
            changeSort(val) {
                if(!this.listQuery.k) this.listQuery.k = '蜘蛛侠'
                this.listQuery.s = val
                this.getData()
            },
            getName(name) {
                return name.replace(/<em>/g, "<em style='color: #ff7a76;font-style: normal;'>")
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
        },
        created() {
            this.listQuery.k = '蜘蛛侠'
            // this.getData()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#magnetic {
    .main {
        margin-top: 20px;
        .filter-container {
            padding: 10px 0 10px 12px;
            .pagination {
                float: right;
                text-align: right;
            }
        }
        .url {
            color: #0e90d2;
        }
    }
}
</style>
