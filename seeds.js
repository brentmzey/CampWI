const mongoose = require("mongoose"),
  Campground = require("./models/campground"),
  Comment = require("./models/comment");

const seeds = [
  {
    name: "Dells of the Eau Claire",
    image:
      "https://www.travelwisconsin.com/uploads/places/43/432a1d33-2f89-4982-9163-cf2ab2b949f5-eauclairedellsfall.jpg?preset=listing-page-slider-desktop",
    description:
      "Cardigan unicorn 90's roof party actually gluten-free succulents tilde put a bird on it fixie pop-up ethical leggings XOXO. Single-origin coffee venmo prism taiyaki four loko tbh humblebrag coloring book. Paleo bespoke activated charcoal pug, cray retro tacos meh. Messenger bag craft beer meditation keytar, brooklyn chambray gluten-free organic small batch tacos iceland poutine deep v actually kickstarter. IPhone PBR&B cliche salvia art party mumblecore leggings vape activated charcoal edison bulb everyday carry.",
  },
  {
    name: "Newport State Park",
    image:
      "https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2017/10/swirling-stars-above-lake-michigan-700x465.jpg",
    description:
      "Echo park shoreditch vinyl craft beer. Readymade raclette shaman, pinterest asymmetrical celiac schlitz messenger bag mustache small batch bicycle rights health goth gentrify ethical cloud bread. Scenester shaman cold-pressed portland, echo park fashion axe jianbing vexillologist chartreuse synth food truck ennui pinterest. Pinterest tilde literally pork belly, dreamcatcher freegan venmo.",
  },
  {
    name: "Twelve Foot Falls Park",
    image: "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/0c/ae/29/64/12-foot-falls.jpg",
    description:
      "Fam la croix taxidermy, godard messenger bag food truck seitan occupy fashion axe chillwave tbh meggings fixie tousled enamel pin. Kickstarter tattooed blog cronut, skateboard pork belly lumbersexual street art beard everyday carry. Migas chillwave banjo biodiesel, shabby chic chicharrones direct trade. Tote bag brooklyn actually blog vexillologist, meggings next level cloud bread scenester la croix twee skateboard tbh neutra. Raclette tumeric asymmetrical fixie, banh mi VHS leggings crucifix YOLO heirloom sartorial shabby chic etsy. Kinfolk ethical chia four loko freegan asymmetrical quinoa sustainable dreamcatcher +1 copper mug. Migas neutra sartorial scenester, small batch palo santo mustache distillery ugh affogato microdosing.",
  },
  {
    name: "Devil's Lake State Park",
    image:
      "https://s3-us-east-2.amazonaws.com/rvshare-wordpress/wp-content/uploads/2015/08/22162024/wisconsin-203354_1280-e1440683063408.jpg",
    description:
      "Copper mug blue bottle yr, pickled trust fund synth helvetica ethical PBR&B drinking vinegar subway tile quinoa literally. Mlkshk sustainable neutra shoreditch asymmetrical church-key migas live-edge letterpress. Before they sold out pinterest fashion axe, 3 wolf moon farm-to-table four loko activated charcoal lo-fi wayfarers flannel slow-carb thundercats kale chips everyday carry small batch. Direct trade ethical mlkshk hexagon cronut VHS. Pabst roof party put a bird on it, locavore yuccie slow-carb microdosing offal copper mug iPhone stumptown tumeric snackwave mixtape green juice.",
  },
  {
    name: "High Cliff State Park",
    image: "https://i.pinimg.com/originals/f8/3e/c3/f83ec348a52519113e05f4e551b58864.jpg",
    description:
      "Green juice copper mug literally slow-carb tousled health goth twee pinterest kogi viral unicorn vegan. You probably haven't heard of them letterpress asymmetrical +1, lo-fi microdosing cray snackwave hammock iPhone cloud bread franzen. Activated charcoal keytar air plant bespoke, tote bag selfies waistcoat microdosing put a bird on it direct trade heirloom. Listicle retro synth, 3 wolf moon adaptogen coloring book narwhal austin godard health goth. Four dollar toast poutine 8-bit edison bulb street art godard ramps intelligentsia bitters 90's wayfarers farm-to-table sriracha artisan raw denim. Chambray etsy ethical lo-fi cold-pressed normcore tilde.",
  },
  {
    name: "Raspberry Island",
    image: "https://www.outdoorsgeek.com/apostle-islands-national-lakeshore-wi/apostle-islands-nl-2/",
    description:
      "Edison bulb gochujang bushwick, butcher pour-over locavore kinfolk. Deep v hella trust fund helvetica cliche hexagon tacos chillwave bicycle rights unicorn plaid pickled sartorial green juice. Tacos retro activated charcoal raw denim franzen occupy. Selvage freegan listicle narwhal lumbersexual. Migas unicorn leggings, letterpress meditation franzen pour-over tacos street art organic irony shabby chic portland chartreuse. Synth hoodie cred letterpress. Swag mustache gentrify hot chicken schlitz vexillologist.",
  },
  {
    name: "Rock Island",
    image: "https://i.redd.it/uahhpjp64tq31.png",
    description:
      "Bicycle rights food truck VHS art party before they sold out ethical scenester put a bird on it keytar ugh subway tile. Hexagon hoodie VHS, viral mixtape chartreuse wolf snackwave poutine photo booth typewriter next level ramps shaman. Roof party woke plaid, hoodie umami vape direct trade selvage poutine twee austin truffaut celiac typewriter cronut. Live-edge tote bag man bun asymmetrical wayfarers stumptown meggings 3 wolf moon synth chillwave green juice banh mi you probably haven't heard of them flexitarian organic. Snackwave craft beer chillwave fashion axe, salvia retro vaporware hot chicken tbh XOXO actually letterpress. Umami sriracha literally four dollar toast.",
  },
];

// Re-factored this code compared to block commented out below
//   to utilize JavaScript's "Async + Await" concepts/techniques
async function seedDB() {
  try {
    //Remove all campgrounds
    await Campground.deleteMany({}); // collection.remove({}); was deprecated
    // console.log("Camgrounds removed.");
    await Comment.deleteMany({}); // collection.remove({}); was deprecated
    // console.log("Comments removed.");
    // loop through each of our data seeds in seeds array
    for (const seed of seeds) {
      let campground = await Campground.create(seed);
      // console.log("Camground created.");
      let comment1 = await Comment.create({
        text: "A great spot to have a nice picnic and enjoy some tasty rum.",
        author: "Brent",
      });
      // console.log("Comment created.");
      campground.comments.push(comment1);
      campground.save();
      // console.log("Comment added to campground.");

      let comment2 = await Comment.create({
        text: "This place is great, but I wish there was internet",
        author: "Homer",
      });
      // console.log("Comment created.");
      campground.comments.push(comment2);
      campground.save();
      // console.log("Comment added to campground.");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = seedDB;

// OLD CODE THAT WE REFACTORED ABOVE TO USE "ASYNC + AWAIT" TECHNIQUES
// module.exports = seedDB;
// function seedDB() {
//   //Remove all campgrounds
//   Campground.remove({}, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("removed campgrounds!");
//     Comment.remove({}, (err) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log("removed comments!");
//       //add a few campgrounds
//       data.forEach((seed) => {
//         Campground.create(seed, (err, campground) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("added a campground");
//             //create a comment
//             Comment.create(
//               {
//                 text: "This place is great, but I wish there was internet",
//                 author: "Homer",
//               },
//               (err, comment) => {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   campground.comments.push(comment);
//                   campground.save();
//                   console.log("Created new comment");
//                 }
//               }
//             );
//           }
//         });
//       });
//     });
//   });
//   //add a few comments
// }

// module.exports = seedDB;
