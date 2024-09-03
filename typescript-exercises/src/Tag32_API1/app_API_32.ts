// = fetch-Level-1_2
console.log("%c fetch-Level-1_2 ", "background: teal; color: white");

type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then((resp) => {
    if (!resp.ok) {
      console.error("Response doesn't work");
    }
    return resp.json();
  })
  .then((comments: Comment[]) => {
    comments.forEach((comment: Comment) => {
      console.log(comment.email);
    });
  })
.catch((error: Error) => {
    console.error(error)
})
.finally(() => {
    console.log("Done with fetching");
})

type Post = { 
    userId: number, 
    id: number, 
    title: string, 
    body: string 
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response: Response) => {
        if (!response.ok) {
            console.error("Response doent work !!");
        }
        // console.log(response);
        return response.json()
    })
    // einzelne posts
    .then((posts: Post[]) => {
        posts.forEach((post: Post) => {
         //   console.log(post)
        })
    // finde die höchste Post-Id und gib sie auf der Konsole aus
        let maxId = 0;
        posts.forEach((post: Post) => {
            if(post.id>maxId){
                maxId = post.id
            } 
        }) 
        console.log(maxId)
    // finde den kürzesten Titel gib ihn auf der Konsole aus
        let minTitel = posts[0].title;
        posts.forEach((post: Post) => {
            if(post.title.length<minTitel.length){
                minTitel = post.title
            } 
        })
        console.log(minTitel)
   // finde den längsten Body und gib ihn auf der Konsole aus
        let maxBody = posts[0].body;
        posts.forEach((post: Post) => {
            if(post.body.length>maxBody.length){
                 maxBody = post.body
            } 
        })
        console.log(maxBody)
    })
    .catch((error: Error) => {
        console.error(error)
    })
    .finally(() => {
        console.log("Done with fetching the posts");
    })


// = fetch-level-1_1 + fetch-level-2_1  -  diese bilderaufgabe....
console.log("%c fetch-Level-1_1 + fetch-level-2_1 ", "background: darkred; color: white");
fetch("https://picsum.photos/v2/list")
    .then((response: Response) => {
     if (!response.ok) {
        console.error("Response doent work !!");
    }
    console.log(response);
    return response.json()
    })
    .then((posts: Post[]) => {
    console.log(posts)
    posts.forEach((post: Post) => {
    //     console.log(post)
    })
})
    .catch((error: Error) => {
        console.error(error)
    })
    .finally(() => {
        console.log("Done with fetching the posts");
    })
