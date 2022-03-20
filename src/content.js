



class ContentItem {
    constructor(title, paths, text, tags, date = null, important = false, link){
        this.title = title;
        this.paths = paths;
        this.text = text;
        this.tags = tags;
        this.date = date;
        this.important = important;
        this.link = link;
        this.init()
    }

    init(){

        // console.log("init " + this.title )
        let tags = [...this.tags];
        let tagObj = {};

        tags.forEach(tag => {
            tagObj[tag] = true;
        })

        this.tags = tagObj;
        // console.log(this.tags)
    }
}

export let items = [


    new ContentItem("Runaway Clothing",
    
                    ["THUMBNAIL./content/runaway-neon.jpg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/XZP-my9j0Rg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/qDu_v-UHTKg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/mBub421i4g0","./content/runaway-inthefield.jpg",], 
    
                    "Runaway Clothing is a popular clothing brand from my hometown of Durham, NC. From the end of my junior year to the middle of my senior year of high school I interned there, creating social media content. I made promotional materials and videos for new releases and community engagement.",
                    
                    ["digital","project","creative","2018","graphic","video"],
                    
                    "April - Dec. 2018", 
                    
                    true,

                    "https://www.runawayclothes.com/"),

    new ContentItem("YUCK!: Side A",
    
                    ["./content/sideA-1.jpg","./content/sideA-4.jpg","./content/sideA-3.jpg","./content/sideA-2.jpg",], 
    
                    "Side A was the first clothing line released for my clothing brand YUCK!. It was my first experiment in designing clothing and in creating promotional materials through a look-book for social media.",
                    
                    ["physical","project","creative","2018"],
                    
                    "Sep. 2018", 
                    
                    true,
                    
                    "https://www.instagram.com/p/BpqlS7FHF_G/"),

    new ContentItem("You Should Write...",

                    ["./content/youshouldwrite-single.jpg","./content/youshouldwrite_spread.jpg"], 

                    "You Should Write More Things Down was a prototype product I created while working as the lead design editor of my highschool's literary magazine.",

                    ["physical","single item","creative","2018","graphic"],
                    
                    "Dec. 2018",
                    
                    false),


    new ContentItem("YUCK!: Goose Season",
    
                    ["./content/goose-season-1.jpg","./content/goose-season-2.jpg","./content/goose-season-3.jpg"], 

                    "Goose Season was the second clothing line released for my clothing brand YUCK!.",

                    ["physical","project","creative","2019"],

                    "Jan. 2019",
                    
                    true,
                    
                    "https://www.instagram.com/p/BsjKQFHB661/"),

    new ContentItem("Humanity: Error of the Cosmos",
    
                    ["./content/humanity-errorofthecosmos.jpg"], 

                    null,

                    ["digital","single item","creative","2019","graphic"],

                    "Feb. 2019",
                    
                    false),

    new ContentItem("Portraits in Ink",
    
                    ["./content/pii-1.jpg","./content/pii-2.jpg","./content/pii-3.jpg","./content/pii-4.jpg","./content/pii-5.jpg","./content/submitathon-poster.jpg"], 

                    "Portraits in Ink is the student literary and art magazine of my highschool, Durham School of the Arts. In my senior year I served as the lead design editor, leading a rotating team of designers to create the ~120 page annual publication.",

                    ["physical","project","group project","creative","2019","2018", "graphic"],

                    "May 2019",
                    
                    true,
                    
                    "https://www.amazon.com/Portraits-Ink-Durham-Literary-Magazine/dp/1098588398/ref=sr_1_1?crid=170L6MQ0G0AQR&keywords=portraits+in+ink+2019&qid=1647709970&sprefix=portraits+in+ink+2019%2Caps%2C121&sr=8-1"),
                        
    new ContentItem("YUCK!: Disposable camera",

                    ["./content/yuckcam-1.jpg","./content/yuckcam-2.jpg","./content/yuckcam-3.jpg","./content/yuckcam-4.jpg","./content/yuckcam-5.jpg",], 

                    "Customized disposable cameras created for my clothing brand YUCK!. These cameras were originally Fujifilm disposable cameras that I replaced the cardstock covers of with custom designed cardstock covers.",

                    ["physical","single item","creative","2019","graphic"],
                    
                    "Sep. 2019",
                    
                    false,
                    
                    "https://www.instagram.com/p/B2Fd0S2g0ZC/"),


    new ContentItem("Driving to Alaska - The Edelweiss Brothers",

                    ["THUMBNAIL./content/alaska-frame.jpg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/Jq5gZO27_is","./content/alaska-5.jpg","./content/alaska-2.jpg","./content/alaska-1.jpg","./content/alaska-4.jpg","./content/alaska-7.jpg","./content/alaska-3.jpg","./content/alaska-6.jpg",], 

                    "This is a music video I directed, shot and edited for a song my friends wrote in early quarantine.",

                    ["digital","single item","creative","2020","video"], 

                    "July 2020", 

                    false,
                    
                    "https://youtu.be/Jq5gZO27_is"),


    new ContentItem("YUCK!: Lawn Care",

                    ["./content/lawncare-5.jpg","./content/lawncare-2.jpg","./content/lawncare-3.jpg","/content/lawncare-4.jpg","/content/lawncare-1.jpg","./content/lawncare-poster.png",], 

                    "Side A was the first clothing line released for my clothing brand YUCK!. It was my first experiment in designing clothing and in creating promotional materials through a look-book for social media.",

                    ["physical","project","creative","2020"], 

                    "July 2020", 

                    true,

                    "https://www.instagram.com/p/CCg2QgOp6iA/"),

                    
    new ContentItem("Vector World",

                    ["./content/vectortest1.png","./content/vectortest3.png"], 

                    null ,

                    ["digital","single item","creative","2020","graphic"],
                    
                    "Sep. 2020",
                    
                    false),

                    
    new ContentItem("Tiny Town",

                    ["./content/tiny-town-1.jpg","./content/tiny-town-2.jpg","./content/tiny-town-3.jpg","./content/tiny-town-4.jpg",], 

                    "Tiny Town is a web application I created as the final project of the web development bootcamp I did in the spring and summer of 2021. Tiny Town is a website that allows users to create city blocks with multiple types of buildings, roads and parks, which connect into a larger city of other user submitted city blocks. The frontend of the application uses ReactJS and renders the 3-D elements with the ThreeJS library. User accounts and city info are stored in a MongoDB database running on an ExpressJS server. I worked on this project with two other developers, one of which who did the majority of the backend and the other who worked on asset creation while I handled most of the frontend and 3-D code.",

                    ["digital","project","group project","2021","3-D","web"],
                    
                    "July 2021",
                    
                    true,
                    
                    "https://github.com/Gpphelps/tiny-town"),

    new ContentItem("Chapel Hill Film Society 2021-2022 Shirt",

                    ["./content/chfs-main-design.png","./content/chfs-logo.png"], 

                    "In the fall of 2021 I designed a brand identity and t-shirt for UNC's primary film club.",

                    ["physical","single item","creative","2021","graphic"],
                    
                    "Sep. 2021",
                    
                    false),

    new ContentItem("Carrboro Farmers Market Posters",

                    ["./content/carb-fm-1.jpg","./content/carb-fm-2.jpg"], 

                    null ,

                    ["digital","single item","creative","2021","graphic"],
                    
                    "Nov. 2021",
                    
                    false),

    new ContentItem("Little Image Filter Web App",

                    ["THUMBNAIL./content/jfk-pixel.png","./content/filter-main.jpg","./content/filter-wave.jpg","./content/jfk-pixel.png","./content/jfk-bit.png","./content/jfk-wave.png",], 

                    "Little Image Filter Web App is a web application that-- as the name suggests--I created to allow users to layer various filters onto images they upload to create unique effects" ,

                    ["digital","single item","web","2021","graphic"],
                    
                    "Dec. 2021",
                    
                    true,
                    
                    "https://zackshersh.github.io/little-image-filter-thingy-app/"),

    new ContentItem("Ann Hobgood Photo Story",

                    ["THUMBNAIL./content/hobgood-10.jpg","./content/hobgood-1.jpg","./content/hobgood-2.jpg","./content/hobgood-3.jpg","./content/hobgood-4.jpg","./content/hobgood-5.jpg","./content/hobgood-6.jpg","./content/hobgood-7.jpg","./content/hobgood-8.jpg","./content/hobgood-9.jpg","./content/hobgood-10.jpg"], 

                    "An Hobgood is a Hillsborough, NC, based artist who creates figurative sculptures from reclaimed materials. I found her through my final project for a photojournalism course I was taking at UNC and over the course of several weeks I photographed had the privilege of being invited into her studio and home to witness her creative and personal lives. The photo story focuses on her difficulties continuing to create her art as she ages." ,

                    ["digital","single item","web","2021","graphic"],
                    
                    "Dec. 2021",
                    
                    true),


]