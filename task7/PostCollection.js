class PostsCollection {
    constructor(InitPost) {
        this._posts = (InitPost || []);
    }

    _filter(filterParam){
        let filterPost = this._posts;
        let filterParamItem = Object.keys(filterParam);
        for(let i = 0; i < filterParamItem.length; i++){
            if(filterParam[filterParamItem[i]] instanceof Date){
                filterPost = filterParam[filterParamItem[i]].filter(post => post[filterParamItem[i]].toDateString() === filterParam[filterParamItem[i]].toDateString());
            }
            else if(typeof filterParam[filterParamItem[i]] === 'object'){
                filterPost = filterPost.filter(post =>{
                    let t = [];
                    t = filterParam[filterParamItem[i]].filter(hTag => post[filterParamItem[i]].includes(hTag));
                    if(t.length !== 0){
                        return true;
                    }
                })
            }
            else {
                filterPost = filterParam[filterParamItem[i]].filter(post => post[filterParamItem[i]] === filterParam[filterParamItem[i]]);
            }
        }
        return filterPost;
    };

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let postCount = 0;
        let postsReturn = [];
        let filterPosts = this._filter(filterConfig);

        filterPosts.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });

        while (top !== postCount && filterPosts[skip]) {
            postsReturn.push(filterConfig[skip]);
            skip++;
            postCount++;
        }
        console.log(postsReturn);
        return postsReturn;
    }

    get(id) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id === id) {
                return this._posts[i];
            }
        }
    }

    static validatePost(post) {
        return ((post.id && (typeof post.id === 'string') && post.id !== '')
            && (post.description && post.description !== '' && typeof post.description === 'string' && post.description.length < 200)
            && (post.createdAt && typeof post.createdAt === 'object' && post.createdAt !== '')
            && (post.author && typeof post.author === 'string' && post.author !== '')
            && (typeof post.photoLink === 'string')
            && (typeof post.hashTags === 'object')
            && (typeof post.likes === 'object'));
    }

    add(post) {
        if (PostsCollection.validatePost(post)) {
            for (let i = 0; i < this._posts.length; i++) {
                if (this._posts[i].id === post.id) {
                    return false;
                }
            }
            this._posts.push(post);
            return true;
        } else return false;
    }

    remove(id) {
        for (let i = 0; i < this._posts.length; i++) {
            if (this._posts[i].id === id) {
                this._posts.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    edit(id, post) {
        for (let i = 0; i < this._posts.length; i++) {
            if(this._posts[i].id === id)
            {
                if(PostsCollection.validatePost(post))
                {
                    if(post.description !== ''){
                        this._posts[i].description = post.description;
                    }
                    if(post.photoLink !== ''){
                        this._posts[i].photoLink = post.photoLink;
                    }
                    if(post.hashTags.length !== 0){
                        this._posts[i].hashTags = post.hashTags.slice(0,post.hashTags.length);
                    }
                    return true;
                }
            }
        }
        return false;
    }

    clear() {
        this._posts = [];
    }

    addAll(postsArray) {
        let notAdded = [];
        for(let i = 0; i < postsArray.length; i++)
        {
            if(!this.add(postsArray[i])){
                notAdded.push(postsArray[i]);
            }
        }
        return  notAdded;
    }
}

(() => {
    window.postsCollection = new PostsCollection();
    }
)();