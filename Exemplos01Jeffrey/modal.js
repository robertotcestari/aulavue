Vue.component('modal', { 
    template: 
    `
    <div>
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                <p>Lorem Ipsum Dolor Amet sic</p>

                </div>
                <!-- Any other Bulma elements you want -->
            </div>
                <button @click="$emit('close')" class="modal-close is-large" aria-label="close"></button>
            
        </div>

    </div>
    `,
    data(){
        return{
        
        }
    }


});


var app = new Vue({
    el: '#root',
    data: {
        isOpen: false
    }
});

// console.log(app);


