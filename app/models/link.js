var db = require('../config');
// var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function() {
//     this.on('creating', function(model, attrs, options) {
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

// module.exports = Link;


var linkSchema = new db.Schema({ 
  url: 'string', 
  baseUrl: 'string',
  code: 'string',
  title: 'string',
  visits: 'integer',
  timestamps: 'string'
});

var Link = db.model('Link', linkSchema);