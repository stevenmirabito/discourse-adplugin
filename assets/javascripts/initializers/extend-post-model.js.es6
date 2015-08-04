import PostModel from 'discourse/models/post';

export default {
  name: 'extend-post-model',
  initialize() {
  	PostModel.reopen({
  	  postSpecificCount: function() {
   	    return this.get('post_number') === parseInt(Discourse.SiteSettings.dfp_nth_post_code); 
  	  }.property('post_number')
  	});
  }
};