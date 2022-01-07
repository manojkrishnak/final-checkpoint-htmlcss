let blogItems = document.getElementsByClassName("blog-items")[0];

function createElm(elm) {
  return document.createElement(elm);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomGibberishNames(){
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let gibberishUsername = "";
    for(let i = 0; i < 6; i++){
        gibberishUsername += alphabets[getRandomNumber(0, 26)];
    }
    return gibberishUsername + getRandomNumber(0,1000);
}

function getFormattedDate(date) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(date);
  return monthNames[d.getMonth()] + " " + d.getDate();
}

function modifyImagesLink(){
    let gender = ["men", "women"];
        return `https://randomuser.me/api/portraits/med/${gender[getRandomNumber(0,2)]}/${getRandomNumber(0,100)}.jpg`;
}

blogData.forEach(function (blog, index) {
  blogItems.append(createBlogs(blog, index));
});

function createBlogs(blog, index) {
  let parentDiv = createElm("div");
  parentDiv.classList.add("blog-content", "borr-top");
  parentDiv.setAttribute("data-id", index);

  let childDivOne = createElm("div");
  childDivOne.classList.add("flex", "align-ct");

  let figure = createElm("figure");

  let img = createElm("img");
  img.src = modifyImagesLink();
  img.alt = "test";

  figure.append(img);

  let divInner1 = createElm("div");
  divInner1.classList.add("blog-meta");

  let a1 = createElm("a");
  a1.href = "#";
  a1.innerText = generateRandomGibberishNames();

  let time = createElm("time");
  time.innerText = getFormattedDate(blog.createdAt);
  time.setAttribute("datetime", blog.createdAt);

  divInner1.append(a1, time);
  childDivOne.append(figure, divInner1);

  let childDivTwo = createElm("div");
  childDivTwo.classList.add("blog-details");

  let a2 = createElm("a");
  a2.href = "#";

  let h2 = createElm("h2");
  h2.innerText = blog.title;

  a2.append(h2);

  let divInner2 = createElm("div");
  divInner2.classList.add("hashtag");

  for (let i = 0; i < blog.tags.length; i++) {
    let a = createElm("a");
    a.href = "#";
    a.innerText = "#" + blog.tags[i];

    divInner2.append(a);
  }

  let divInner3 = createElm("div");
  divInner3.classList.add("blog-feedback", "flex", "justify-sb");

  let divInner4 = createElm("div");
  divInner4.classList.add("col-1-2");

  if (blog.feedback.hearts > 0) {
    let a3 = createElm("a");
    a3.href = "#";

    let i1 = createElm("i");
    i1.classList.add("far", "fa-heart");

    a3.innerText = blog.feedback.hearts + " reactions";
    a3.prepend(i1);
    divInner4.append(a3);

  }

  let a4 = createElm("a");
  a4.href = "#";

  let i2 = createElm("i");
  i2.classList.add("far", "fa-comments");

  a4.innerText = (blog.feedback.comments > 0 ? (blog.feedback.comments + " comments") : "Add Comment");
  a4.prepend(i2);
  divInner4.append(a4);


//   divInner4.append(a3, a4);

  let divInner5 = createElm("div");
  divInner5.classList.add("col-2-2");

  let span = createElm("span");
  span.innerText = blog.readTime + " min read";

  let a5 = createElm("a");
  a5.classList.add("save-btn");
  a5.href = "#";
  a5.innerText = "Save";

  divInner5.append(span, a5);

  divInner3.append(divInner4, divInner5);

  childDivTwo.append(a2, divInner2, divInner3);

  parentDiv.append(childDivOne, childDivTwo);

  return parentDiv;
}
