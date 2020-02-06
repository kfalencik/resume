<template>
  <div class="resume">
    <section class="resume__intro" section="intro">
      <img src="~/assets/images/lightning.png" width="100" role="presentation" alt="" />
      <h2 class="h2">Hi! I'm Kevin Falencik</h2>
      <p>I'm a {{ age }} years old, Polish <strike>bug</strike> <span class="speed"><strong>front-end</strong> developer</span>, living in Edinburgh, Scotland.</p>
      <p>I created this <span class="speed">resume</span> specially for <strike>myself</strike> <strong>you!</strong>, <strike> so I can BRAG</strike> so you can learn about me.</p>
      <p>Hope you find everything you would like to know but if you <span class="speed">still have any questions</span> drop me a <a class="speed" href="mailto:kfalencik@gmail.com">message</a>. There is more infromation at the bottom about how the site works if you want to check it out.</p>
      <p>* highlighted, in <span class="speed">yellow</span>, for speed-reading.</p>
    </section>

    <section section="about">
      <h3 class="h3">About me.</h3>
      <ul>
        <li v-for="(row, index) in info" :key="index"><strong>{{row.label}}:</strong> <span v-html="row.value"></span></li>
      </ul>

      <strong>I love to:</strong>
      <ul>
        <li v-for="(row, index) in hobbies" :key="index"><span v-html="row.value"></span></li>
      </ul>
    </section>

    <section section="story">
      <h3 class="h3">My story.</h3>
      <img src="~/assets/images/lightbulb.png" width="120" role="presentation" alt="" />
      <p>Shortly after I was born my parents decided to move back to Poland, where I spent most of my life. <span class="speed">Growing up</span> I remember always being very curious about computers and how they work. I have a very vivid memory of my <span class="speed">8-year-old-self</span> sitting in front of our very <span class="speed">first family computer</span>, trying to open some of the files in "Windows" directory and deleting them cause I thought it would speed-up the computer (these are unreadable garbage anyways!) until <span class="speed">it died</span>. That's when I experienced my first <span class="speed">blue-screen</span>, a lot of dad's shouting and a week ban for the computer but <span class="speed">my curiosity grew even larger</span>.</p>
      
      <img src="~/assets/images/arrow.png" width="100" role="presentation" alt="" />  
      <p>Not long after this incident, my parents had a great idea to send me to one of those <span class="speed">"Learn how to use the computer"</span> courses which consisted mainly of me playing the <span class="speed">pinball game on Windows XP</span> (oh the good old days) but also my first introduction to the internet and more importantly the golden god of web langauges - <span class="speed">HTML</span>. I was immedietally hooked. With a couple lines of code I can put together a very basic but real website!</p>
      <p>By the <span class="speed">age of 15</span> I have learned <span class="speed">PHP</span> and developed about 5 or 6 websites for the local businesses. Some of them still exist and remain unchanged (what???), like this one for <span class="speed">one of the biggest coffin manufacturers</span> in Europe - <a class="speed" href="http://www.zpdlindner.pl/" target="_blank" rel="noopener">ZPD Lindner</a>. I had tons of fun <strike>stealing everyones code</strike> programming and gathering more and more knowledge everyday. I knew <span class="speed">this is what I want to do</span> as an adult so I applied to <span class="speed">one of the best technical schools in Poland</span> that offered IT courses.</p>
      
      <img src="~/assets/images/book.png" width="120" role="presentation" alt="" />  
      <p>To be very honest, <span class="speed">I didn't learn much</span> there. Although it WAS a good school, IT knowledge I got from it was mostly general or <span class="speed">not relevant to web technologies</span>. Second half of the third year introduced a class called "Web applications" which I <span class="speed">totally smashed because of my previous knowledge and experience</span>.</p>
      <p>After four years it was time to chose my <span class="speed">University</span>. I moved to a bigger city and started my three-years long IT course with the hopes of getting <span class="speed">actual web-app knowledge</span>. In the mean-time I found my <span class="speed">first offical job</span> as a junior <span class="speed">Drupal</span> developer which was super exciting for me and really spread my wings as a developer. About 4 months into the course I learned that - <span class="speed">nope</span>, the course has nothing to do with web-apps and I decided to <span class="speed">drop-out</span> and continue gaining experience at my job.</p>

      <img src="~/assets/images/paperplane.png" width="120" role="presentation" alt="" />
      <p>The idea of moving countries came out of nowhere really. I had a good, steady job, I had my friends, I was happy but my <span class="speed">natural curiosity</span> was telling me to <span class="speed">go and discover</span>. I figured why not try something (or someplace) new? If anything goes wrong or I don't like it, <span class="speed">I can always come back</span>. I knew nothing about Scotland or <span class="speed">Edinburgh</span> before moving here but when I finally arrived, holding bags containing all of my life belongings, I saw the city for the first time, <span class="speed">fell in love</span> and decided to stay.</p>

    </section>

    <section section="education">
      <h3 class="h3">Education.</h3>
      <img src="~/assets/images/backpack.png" width="140" role="presentation" alt="" />
      <ul>
        <li v-for="(row, index) in education" :key="index"><strong>{{row.label}}:</strong> <span v-html="row.value"></span></li>
      </ul>
    </section>

    <section section="experience">
      <h3 class="h3">Experience.</h3>
      <img src="~/assets/images/search.png" width="140" role="presentation" alt="" />
      
      <article>
        <strong>Droptica (former Advanteo) - Nov 2011 - Jan 2013</strong>
        <p><span class="speed">Junior Developer</span></p>
        <p>Full-stack remote role. This involved mainly <span class="speed">developing and maintaing small to medium Drupal sites</span>. I was responsible for both back and front end of websites as well as communication with the client.</p>
        <p>Tech stack: PHP5, Drupal 6 & 7, CSS, SASS, GIT, LAMP, MySQL, jQuery, Linux</p>
      </article>

      <article>
        <strong>Starbit - Nov 2013 - Mar 2018</strong>
        <p><span class="speed">Lead developer</span></p>
        <p>My first job after moving to Edinburgh. Thanks to a small size of the agency I was involved in a great number of very <span class="speed">creative and innovative</span> projects. My role in the company has changed throught the years, starting as a contractor, being a junior developer and ending with the role of a lead developer. I developed web applications using Drupal 7 and Wordpress but also managed a small team of developers. This role involved a constant communication with the client via email and phone.</p>
        <p>Tech stack: PHP 5 & 7, Drupal 7, Wordpress, CSS, SASS, GIT, WAMP, LAMP, MySQL, jQuery, AcquiaDevTools</p>
      </article>

      <article>
        <strong>Kin+Carta (former AmazeRealise) - Mar 2018 - Mar 2020</strong>
        <p><span class="speed">Front end developer</span></p>
        <p>At AmazeRealise I had a great pleasure of working on much bigger client projects including: Expedia, Lexus, Unilever, Lloyds Banking Group, Franklin Templeton, Heathrow airport and many more. I have gained a lot of front end knowledge thanks to project variety and a great supportive team.</p>
        <p>Tech stack: NPM, Gulp, Grunt, CSS, SASS (BEM), Vue.js, Nuxt.js, Vuex, Angular, React, React Native, GIT, SVN</p>
      </article>
    </section>

    <section section="outro">
      <h3 class="h3">Outro.</h3>

      <p><span class="speed">Thank you</span> for visting my page. I would like to shortly talk about the tools I used to create <span class="speed">this website</span>.</p>
      <p>In order to achieve this <strike>monstrosity</strike> beautiful looking site I have used <span class="speed">Nuxt.js</span> framework which I love using for pretty much all of my side projects. Nuxt.js is sort of a Vue.js on steroids. Contains pretty much everything you need to create a vue website including: routing, a store which you can use to easily send and receive data beteen components, development server and also server side rendering which is great for SEO!</p>
      <p>For styling I'm obviously using <span class="speed">SASS</span>, and <span class="speed">BEM</span> naming convention for my class names. In terms of back end, well this is all handled by <span class="speed">Netlify</span> and deployed using <span class="speed">Github</span> - no server required (yay).</p>
      <p>The very nice dynamic marble effect background uses some black svg <span class="speed">magic</span> and to be honest with you I have no idea how it actually works.</p>
      <p>Fun fact, no media queries were used when developing this site.</p>
      <p>That's all, <span class="speed">BYE!</span></p>
    </section>

    <p><img src="~/assets/images/loading.png" width="140" role="presentation" alt="" />
    <p>&nbsp;</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      birthday: '1991-02-27',
      info: [
        { label: "Name", value: "<span class='speed'>Kevin Steven Falencik</span>" },
        { label: "Birth", value: "27th Feb 1991, Berlin Neukölln" },
        { label: "Current address", value: "67 Lorne Street, Edinburgh, Scotland" },
        { label: "Contact", value: "<span class='speed'>kfalencik@gmail.com</span> or +44 7961276427" },
      ],
      hobbies: [
        { value: "Listen to music" },
        { value: "Cycle" },
        { value: "Play guitar" },
        { value: "Movies and books" },
        { value: "Art galleries" },
        { value: "Video and board games" },
        { value: "Doodle and tattoos" },
      ],
      education: [
        { label: "Primary school (6 years)", value: "- Tczew, Poland" },
        { label: "Lower-secondary school (3 years)", value: "Gimnazjum number 1, Tczew, Poland"},
        { label: "Technical school (4 years)", value: "- Complex of technology and communication schools, Gdansk, Poland"},
        { label: "University (unfinished, 4 months)", value: "- Univeristy of Gdansk, Poland"}
      ]
    }
  },
  computed: {
    age() {
      const birthday = new Date(this.birthday);
      return ~~((Date.now() - birthday) / (31557600000));
    }
  }
}
</script>

<style lang="scss" scoped>
  .resume {
    max-width: $breakpoint-md;
    padding: 50px 20px;

    &__intro {
      text-align: center;
    }

    section {
      margin: 2em 0 1em;
    }

    article {
      margin-bottom: 25px;
      padding-bottom: 25px;
      border-bottom: 5px dotted $black;
    }

    img {
      display: block;
      margin: 0.5em auto;
    }
  }
</style>