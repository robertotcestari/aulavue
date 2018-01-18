Vue.component('tabs', { 
    template: 
    `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" @click="makeActive(tab)" id="class1" :class="{'is-active' : tab.isActive}">
                    <a>{{tab.name}}</a>
                </li>

            </ul>
        </div>


        <div class="tabs-details"><slot></slot></div>

    </div>

    `,
    data(){
        return{
        tabs: [],
        isActive: false,
        }
    },


    created() {
        this.tabs = this.$children;

    },




    methods: {
        showModal(tabName) {
            console.log(tabName)
        },

        makeActive(selectedTab){
            this.tabs.forEach(tab => 
            {
                tab.isActive = (tab.name == selectedTab.name);
            })
        }
    }

});


Vue.component('tab', {
    template: 
    `
    <div v-if="isActive"><slot></slot></div>
    
    `
    ,
    props: {
        name: { required:true },
        selected: { default: false}
    }, 

    data () {
        return {
            isActive: false
        }
    }, 

    mounted() {
        this.isActive = this.selected;
    }

});


var app = new Vue({
    el: '#root',

});

// console.log(app);


