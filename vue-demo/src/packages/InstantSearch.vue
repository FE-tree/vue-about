<template>
    <div id="InstantSearch">
        <div class="search-box">
            <div class="search-wrapper">
                <input type="text" v-model="keyword" placeholder="Search Name..." @focus="list=true" @blur="list=false" />
            </div>
            <!-- <div class="wrapper" ref="wrapper"> -->
            <div class="wrapper" ref="wrapper">
                <div class="people" :style="{height: list?'30px':'0px'}" v-for="people in filteredList" @click="clickPeople(people)"> - {{ people.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
class People {
    constructor(name, index) {
        this.name = name;
        this.index = index;
    }
}
export default {
    name: 'InstantSearch',
    data () {
        return {
            list: false,
            keyword: '',
            peopleList: [
                new People('天元', '007-01'),
                new People('两仪', '007-02'),
                new People('三才', '007-03'),
                new People('四象', '007-04'),
                new People('五行', '007-05'),
                new People('六道', '007-06'),
                new People('七星', '007-07'),
                new People('八卦', '007-08'),
                new People('九宫', '007-09'),
                new People('混沌', '007-10'),
                new People('无极', '007-11'),
            ]
        }
    },
    methods: {
        clickPeople(data) {
            alert('name：' + data.name + '\nindex：' + data.index)
        }
    },
    computed: {
        filteredList() {
            return this.peopleList.filter((people) => {
                // return people.name.toLowerCase().includes(this.keyword.toLowerCase());
                return people.name.includes(this.keyword);
            });
        }
    },
    created() {
        console.log(this.peopleList)
    },
    mounted() {
        console.log(this.$refs.wrapper)
    }
}
</script>

<style scoped>
    .search-box {
        padding: 1rem;
    }
    .search-wrapper input {
        font-size: 1rem;
        border-radius: 10px;
        padding: 5px 10px;
        border: 1px solid #ccc;
    }
    .wrapper {
        margin-top: .5rem;
        margin-left: 2px;
        padding: 0px 8px;
        width: 12rem;
        box-shadow: 0 0 3px #ccc;
        border-radius: 3px;
        background: #fff;
    }
    .wrapper .people {
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        transition: all 1s;
    }
</style>
