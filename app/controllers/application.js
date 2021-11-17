import Ember from 'ember';

export default Ember.Controller.extend({
    store: Ember.inject.service(),

    actions: {
        createPost() {
            const newPost = this.store.createRecord('post', { title: 'Anon', body: 'Hello World!' });

            newPost.save({
                adapterOptions: {
                    isRealtime: true                    
                }
            });
        }
    }
});