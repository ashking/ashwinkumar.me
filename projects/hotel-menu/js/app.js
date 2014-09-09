(function() {
	window.template = function(id){
        return _.template($('#' + id).html());
    };

    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Routes: {},
        store:{}
    }; 

    App.Models.MenuItem = Backbone.Model.extend({
        category:'',
        name: '',
        description: ''
    });

    App.Collections.MenuItems = Backbone.Collection.extend({
        model: App.Models.MenuItem

    });

    App.Views.MenuItem = Backbone.View.extend({
        tagName: 'li',
        template: template("category"),
        render: function(){
            if(!$("#menu-categories").find('a[href=#STARTERS]').length){
                var template = this.template(this.model.toJSON());
                this.$el.html(template);
                return this;
            }
                
        }
    });

    App.Views.MenuItems = Backbone.View.extend({
        tagName: 'ul',
        className: 'nav nav-tabs',
        initialize: function(){
            this.render();
        },
        render: function(){
            this.collection.each(this.addItem, this);
        },

        addItem: function(item){
            obj = item.toJSON();
            if(App.store[obj.category] == undefined){
                App.store[obj.category] = 1;
                var itemView = new App.Views.MenuItem({model: item});

                this.$el.append(itemView.render().el);
                var div = $("<div class='tab-pane' id='"+ obj.category +"'></div>");
                $("#menu-items").append(div);
            }
            if(!$("#" + obj.category).length){
                var div = $("<div class='tab-pane' id='"+ obj.category +"'></div>");
            }
            var temp = template("menu-item");
            $("#" + obj.category).append(temp(obj));
            

        }
    });



//=============================
    var menuItems = new App.Collections.MenuItems([
        {
            category : 'STARTERS',
            name: 'Cheese platter (3 cheese] 5 cheese)',
            description: 'Assorted continental cheese with condiments.'
        },
        {
            category : 'STARTERS',
            name: 'Onion Rings',
            description: 'Crunchy sweet onion rings, breaded and golden fried. Served with Wasabi mayonnaise.'
        },
        {
            category : 'STARTERS',
            name: 'Honey Chilli Potatoes',
            description: 'Baked potato wedges tossed in a spicy golden honey dressing, coated in toasted sesame seeds.'
        },
        {
            category : 'STARTERS',
            name: 'Chips & Dips',
            description: 'Fresh homemade corn tortilla chips served with duo oi pineapple 8- tomato salsa.'
        },
        {

            category : 'STARTERS',
            name: 'Chefs German pork ribs',
            description: 'German pork ribs coated with Chefs special hot and sweet sauce.'
        },
        {

            category : 'STARTERS',
            name: 'Cold Meat Platter',
            description: 'Continental cured meats with condiments.'
        },
        {

            category : 'STARTERS',
            name: 'Breaded Calamari Rings',
            description: 'Calamari rings marinated & mildly spiced, fried with a coating of Panko crumbs.'
        },
        {

            category : 'STARTERS',
            name: 'Grilled Garlic Pesto Prawns',
            description: 'King Prawns tossed in home made basil and garlic pesto.'
        },
        {

            category : 'STARTERS',
            name: 'Spicy Chicken Wings',
            description: 'Spicy chicken wings marinated in thyme. paprika and brown sugar served with a delicious blue cheese sauce or served with hot and sweet house sauce.'
        },
        {

            category : 'STARTERS',
            name: 'Chicken Skewers',
            description: 'Lemon and basil marinated chicken skewers served with lemon mayonnaise.'
        },
        {

            category : 'SALADS',
            name: 'Pear, Walnut and Lettuce Salad',
            description: 'Pears, toasted walnuts brought together with a lemon, olive oil dressing and Parmesan shavings.'
        },
        {

            category : 'SALADS',
            name: 'Caesar salad',
            description: 'Crisp romaine lettuce Caesar salad. garlic croutons, Parmesan, also served with chicken.'
        },
        {

            category : 'SALADS',
            name: 'Greek Salad',
            description: 'Iceberg and romaine lettuce tossed with a red wine vinaigrette and Greek feta cheese.'
        },
        {

            category : 'SALADS',
            name: 'Chicken and smoked bacon salad',
            description: 'Dressed mixed lettuce. grilled lemon and thyme chicken supreme. smoked German bacon.'
        },
        {

            category : 'SALADS',
            name: 'Oriental Tuna Salad',
            description: 'Grilled seared tuna served with julienne of vegetables with oriental dressing.'
        },
        {

            category : 'MAINS',
            name: 'Tri-colour home made Tagliatelle with Grilled Vegetables',
            description: 'Our signature version of the Italian favourite with season fresh vegetables tossed in extra virgin olive oil. with an option of cream sauce.'
        },
        {

            category : 'MAINS',
            name: 'Mac ’n Cheese',
            description: 'Cooked elbow macaroni in cheesy cream sauce. Also served with chicken.'
        },
        {

            category : 'MAINS',
            name: 'Spaghetti with lamb bolognaise',
            description: 'Traditional bologannaise cooked with lamb mince and spaghetti.'
        },
        {

            category : 'MAINS',
            name: 'Bangers and Mash',
            description: 'Grilled bangers (Sausages) with mashed potatoes and onion gravy.'
        },
        {

            category : 'MAINS',
            name: 'Lasagne vegetarian',
            description: 'lasagne layered with aubergine, zucchini and spinach.'
        },
        {

            category : 'MAINS',
            name: 'Lamb Shanks',
            description: 'slow cooked lamb shanks in rosemary. pomme puree.buttered spinach. carrot. rosemary jus.'
        },
        {

            category : 'MAINS',
            name: 'Herb spiced salmon',
            description: 'Herb spiced salmon with creamed leeks, tomato salsa.'
        },
        {
            category : 'MAINS',
            name: 'Eds Beer Batter Fish and Chips',
            description: 'A British classic. home brewed Porter Fish and chips,peas,fries and tartar sauce.'
        },
        {

            category : 'MAINS',
            name: 'Stuffed chicken breast',
            description: 'Chicken mince and mushroom stuffed and rolled in chicken breast, braised leeks,dauphinoiSe potato, buttered carrots, mushroom sauce.'
        },
        {

            category : 'MAINS',
            name: 'Peas and Asparagus risotto',
            description: 'Creamy risotto combined with peas. asparagus, mascarpone cheese,Parmesan crisps.'
        },
        {

            category : 'DESSERTS',
            name: 'Blueberry Cheese cake',
            description: 'Philadelphia cheese cake glazed with blueberry compote'
        },
        {

            category : 'DESSERTS',
            name: 'Eggless chocolate cake',
            description: 'Egg less chocolate cake topped with walnut, chocolate and sugar'
        },
        {

            category : 'DESSERTS',
            name: 'Chocolate pudding',
            description: 'Warm chocolate pudding with n moist center.'
        },
        {

            category : 'DESSERTS',
            name: 'Chocolate Brownie',
            description: 'Freshly made chocolate brownie with walnuts'
        },
        {

            category : 'DESSERTS',
            name: 'Apple Crumble',
            description: 'Apple crumble with vanilla custard'
        },
        {

            category : 'DESSERTS',
            name: 'Walnut Flan',
            description: 'Walnut flan caramel sauce Chantilly cream'
        },
        {

            category : 'DESSERTS',
            name: 'Bread and butter Pudding',
            description: 'Bread and butter pudding ot the day sewed with custard'
        }

    ]);


itemView = new App.Views.MenuItems({collection: menuItems});

$("#menu-categories").prepend(itemView.el);
$('#menu-categories a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

})();
