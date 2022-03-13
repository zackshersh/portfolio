



class ContentItem {
    constructor(title, paths, text, tags, date = null, important = false, extraOptions){
        this.title = title;
        this.paths = paths;
        this.text = text;
        this.tags = tags;
        this.date = date;
        this.important = important;
        // this.link = extraOptions.link;
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
    
                    ["THUMBNAIL%PUBLIC_URL%/content/runaway-neon.jpg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/XZP-my9j0Rg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/qDu_v-UHTKg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/mBub421i4g0","%PUBLIC_URL%/content/runaway-inthefield.jpg",], 
    
                    "Runaway Clothing is a popular clothing brand from my hometown of Durham, NC. From the end of my junior year to the middle of my senior year of high school I interned there, creating social media content. I made promotional materials and videos for new releases and community engagement.",
                    
                    ["digital","project","creative","2018","graphic","video"],
                    
                    "April - Dec. 2018", 
                    
                    true),

    new ContentItem("YUCK!: Side A",
    
                    ["%PUBLIC_URL%/content/sideA-1.jpg","%PUBLIC_URL%/content/sideA-4.jpg","%PUBLIC_URL%/content/sideA-3.jpg","%PUBLIC_URL%/content/sideA-2.jpg",], 
    
                    "Side A was the first clothing line released for my clothing brand YUCK!. It was my first experiment in designing clothing and in creating promotional materials through a look-book for social media.",
                    
                    ["physical","project","creative","2018"],
                    
                    "Sep. 2018", 
                    
                    true),

    new ContentItem("You Should Write...",

                    ["%PUBLIC_URL%/content/youshouldwrite-single.jpg","%PUBLIC_URL%/content/youshouldwrite_spread.jpg"], 

                    "You Should Write More Things Down was a prototype product I created while working as the lead design editor of my highschool's literary magazine.",

                    ["physical","single item","creative","2018","graphic"],
                    
                    "Dec. 2018",
                    
                    false),


    new ContentItem("YUCK!: Goose Season",
    
                    ["%PUBLIC_URL%/content/goose-season-1.jpg","%PUBLIC_URL%/content/goose-season-2.jpg","%PUBLIC_URL%/content/goose-season-3.jpg"], 

                    "Goose Season was the second clothing line released for my clothing brand YUCK!.",

                    ["physical","project","creative","2019"],

                    "Jan. 2019",
                    
                    true,
                    
                    {link: "https://www.instagram.com/p/BsjKQFHB661/"}),

    new ContentItem("Humanity: Error of the Cosmos",
    
                    ["%PUBLIC_URL%/content/humanity-errorofthecosmos.jpg"], 

                    null,

                    ["digital","single item","creative","2019","graphic"],

                    "Feb. 2019",
                    
                    false),

    new ContentItem("Portraits in Ink",
    
                    ["%PUBLIC_URL%/content/pii-1.jpg","%PUBLIC_URL%/content/pii-2.jpg","%PUBLIC_URL%/content/pii-3.jpg","%PUBLIC_URL%/content/pii-4.jpg","%PUBLIC_URL%/content/pii-5.jpg","%PUBLIC_URL%/content/submitathon-poster.jpg"], 

                    "Portraits in Ink is the student literary and art magazine of my highschool, Durham School of the Arts. In my senior year I served as the lead design editor, leading a rotating team of designers to create the ~120 page annual publication.",

                    ["physical","project","group project","creative","2019","2018", "graphic"],

                    "May 2019",
                    
                    true),
                        
    new ContentItem("YUCK!: Disposable camera",

                    ["%PUBLIC_URL%/content/yuckcam-1.jpg","%PUBLIC_URL%/content/yuckcam-2.jpg","%PUBLIC_URL%/content/yuckcam-3.jpg","%PUBLIC_URL%/content/yuckcam-4.jpg","%PUBLIC_URL%/content/yuckcam-5.jpg",], 

                    "Customized disposable cameras created for my clothing brand YUCK!. These cameras were originally Fujifilm disposable cameras that I replaced the cardstock covers of with custom designed cardstock covers.",

                    ["physical","single item","creative","2019","graphic"],
                    
                    "Sep. 2019",
                    
                    false),


    new ContentItem("Driving to Alaska - The Edelweiss Brothers",

                    ["THUMBNAIL%PUBLIC_URL%/content/alaska-frame.jpg","YOUTUBE-EMBEDhttps://www.youtube.com/embed/Jq5gZO27_is","%PUBLIC_URL%/content/alaska-5.jpg","%PUBLIC_URL%/content/alaska-2.jpg","%PUBLIC_URL%/content/alaska-1.jpg","%PUBLIC_URL%/content/alaska-4.jpg","%PUBLIC_URL%/content/alaska-7.jpg","%PUBLIC_URL%/content/alaska-3.jpg","%PUBLIC_URL%/content/alaska-6.jpg",], 

                    "This is a music video I directed, shot and edited for a song my friends wrote in early quarantine.",

                    ["digital","single item","creative","2020","video"], 

                    "July 2020", 

                    false),


    new ContentItem("YUCK!: Lawn Care",

                    ["%PUBLIC_URL%/content/lawncare-5.jpg","%PUBLIC_URL%/content/lawncare-2.jpg","%PUBLIC_URL%/content/lawncare-3.jpg","/content/lawncare-4.jpg","/content/lawncare-1.jpg","%PUBLIC_URL%/content/lawncare-poster.png",], 

                    "Side A was the first clothing line released for my clothing brand YUCK!. It was my first experiment in designing clothing and in creating promotional materials through a look-book for social media.",

                    ["physical","project","creative","2020"], 

                    "July 2020", 

                    true),

                    
    new ContentItem("Vector World",

                    ["/content/vectortest1.png","%PUBLIC_URL%/content/vectortest3.png"], 

                    null ,

                    ["digital","single item","creative","2020","graphic"],
                    
                    "Sep. 2020",
                    
                    false),

                    
    new ContentItem("Carrboro Farmers Market Posters",

                    ["./content/carb-fm-1.jpg","%PUBLIC_URL%/content/carb-fm-2.jpg"], 

                    null ,

                    ["digital","single item","creative","2021","graphic"],
                    
                    "Nov. 2021",
                    
                    false),

    new ContentItem("Little Image Filter Web App",

                    ["THUMBNAIL%PUBLIC_URL%/content/jfk-pixel.png","%PUBLIC_URL%/content/filter-main.jpg","%PUBLIC_URL%/content/filter-wave.jpg","%PUBLIC_URL%/content/jfk-pixel.png","%PUBLIC_URL%/content/jfk-bit.png","%PUBLIC_URL%/content/jfk-wave.png",], 

                    "Little Image Filter Web App is a web application that-- as the name suggests--I created to allow users to layer various filters onto images they upload to create unique effects" ,

                    ["digital","single item","web","2021","graphic"],
                    
                    "Dec. 2021",
                    
                    true),


]