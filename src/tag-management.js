
class Tag{
    constructor(name){
        this.name = name;
        this.active = false;
    }
}


export let tags = [
    new Tag('creative'),
    new Tag('web'),
    new Tag('project'),
    new Tag('single item'),
    new Tag('physical'),
    new Tag('digital'),
    new Tag('graphic'),
    new Tag('3-D'),
    new Tag('video'),
    new Tag('group project'),
    new Tag('2018'),
    new Tag('2019'),
    new Tag('2020'),
    new Tag('2021'),
    new Tag('2022'),
]


export function reorderTags(){
    let newArr = [];

    tags.forEach(tag => {
        if(tag.active){
            newArr.push(tag)
        }
    })
    tags.forEach(tag => {
        if(!tag.active){
            newArr.push(tag)
        }
    })

    tags = newArr;

}

