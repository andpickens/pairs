Template.body.helpers({
  pairs: function () {
    return Pairs.find({});
  },
  people: function () {
    return People.find({});
  }
});
