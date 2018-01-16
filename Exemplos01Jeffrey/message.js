Vue.component('message', {
    template: `
            <article class="message">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                <slot></slot>
            </div>
        </article>
    `,
    props: ['title']

});


var app = new Vue({
    el: '#root'
});

// console.log(app);


