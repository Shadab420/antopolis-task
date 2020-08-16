$(document).ready(() => {

    let reviews = [
        {
            name: "Milana Frankone",
            postedOn: new Date(),
            message: 'Fanny pack actually roof party, shabby chic fashion axe mustache yuccie chambray single-origin coffee semiotics etsy brunch put a bird on it. Microdosing next level dreamcatcher, ennui art party celiac brunch tilde craft beer flexitarian cronut 3 wolf moon etsy. Tote bag vinyl fixie keytar, jean shorts deep v cronut PBR&B vegan mustache lomo.'
        },

        {
            name: "James Franklin",
            postedOn: new Date(),
            message: 'Fanny pack actually roof party, shabby chic fashion axe mustache yuccie chambray single-origin coffee semiotics etsy brunch put a bird on it. Microdosing next level dreamcatcher, ennui art party celiac brunch tilde craft beer flexitarian cronut 3 wolf moon etsy. Tote bag vinyl fixie keytar, jean shorts deep v cronut PBR&B vegan mustache lomo.'
        }
    ]

    //elements

    let reviewList = $(".review-list ul");
    let productImagePreview = $('.image-preview img');


    //show reviews

    reviews.map(review => {

        let newListItem = '<li class="single-review">'
                            +'<div class="review-img">'
                                +'<img src="../assets/images/no-user.jpeg" alt="user image" />'
                            +'</div>'
                            +'<div class="review-msg">'
                                +'<h5>'+review.name+'</h5>'
                                +'<p>'+review.postedOn+'</p>'
                                +'<p>'+review.message+'</p>'
                            +'</div>'
        
                        +'</li>'

        reviewList.append(newListItem)
    })


    //image preview change

    let imageChange = (imgId) => {
        $('.image'+imgId).click(() => {
            productImagePreview.attr('src', 'assets/images/products/tshirt'+imgId+'.jpg')
        });
    }

    for(var i=1; i<=4; i++) imageChange(i);

});