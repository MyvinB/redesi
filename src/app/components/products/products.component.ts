import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor() { }
  image=["handcraft.jpeg","1.jpeg","2.jpeg"].map((n)=>`assets/img/${n}`);
  // products =[{name:"Chicken",about:"Chiciken",cost:900,points:["chicken is cheaper than normla","tandoori is cheaper than normal"],images:["handcraft.jpeg","1.jpeg","2.jpeg"].map((n)=>`assets/img/${n}`)},{name:"Tandori",about:"cdnckdnk",cost:800,images:["handcraft.jpeg","1.jpeg","2.jpeg"].map((n)=>`assets/img/${n}`)}];

  

  products=[


    {id:1,name:"Petrichor-Organic Green Tea Blend",about1:"Just a decade ago, in 2008, Mayura, an engineer, went to London or her master's degree. She was quickly fast-tracked to a consulting role as soon as she graduated. As a consultant, she was exposed to business strategies of various companies, from retail to manufacturing. Her focus on numbers is what led her to the tea trail.",img1:"assets/img/team.jpeg",img2:"assets/img/products.jpeg",about2:"Why did she go to the tea estates first? To take the first step in setting up a supply chain. Once she homed in on a tea estate in Darjeeling that could give her a specific variety of leaves, she travelled to Allahabad to get the botanical suppliers. In Bengaluru, she found fruit suppliers; her experiment was just beginning. In 2016, she brought all these ingredients into her kitchen and experimented with different tastes. She eventually figured out the proportions and blends, decided on nine blends, and started scouting for a factory. Her brand, Ausum Tea, was born in the financial year 2018. The startup does not offer regular teas; it focuses on tea blends and tisanes that “create a storm in a tea cup”. The tea blends available include Calm 'em Nerves, Eastern Zing, Mango Mess, Petrichor, and Pure Seduction. The tisanes on offer are After 8, Spanish Sangria, Banana Bread Nut, and Winter in a Mug. Other varieties include spiced blends, floral blends, fruity blends, dawn-to-dusk options, and cold brews.",cost:450,points:["Give yourself a cleanse and detox","layered with the sweetness of licorice","spice from clove and peppercorn","sweet hints of mint and fennel"],images:["prod0.jpeg","prod1.jpeg","prod2.jpeg","prod3.jpeg"].map((n)=>`assets/img/${n}`)} 
    ,
     {id:2,name:"Bamboo Bicycles by Capt. Shashishekhar Pathak",about1:"In 2012–13, about 12 million bicycles were sold in India. Growing with a moderate rate of about six percent, bicycle sales in the country is surging every year. In addition to taking up bicycle as a mode of transport, people in India are opting to ride it for fitness and health. While most bicycles in India are manufactured from tubes made of standard metal, a bamboo frame is a novel concept. Foraying into the field of eco-friendly bicycles, made from bamboo for a growing bicycle market in the country, is Capt. Shashishekhar Pathak from Mumbai.",img1:"assets/img/bicycle1.jpeg",img2:"assets/img/bicycle2.jpeg",about2:"There's a lot of misconception regarding the durability of bamboo. Capt. Shashishekhar explains that what we imagine as garden stakes and decorative bamboo should not be associated in the same way as construction grade bamboo for construction and frame building. “Sourcing, drying and picking out the right variety of bamboo will dictate the kind of product that you are making. To ensure better impact, scratch resistance and low brittleness of the bamboo tubes, they are sourced from high density and thicker walled bamboo varieties,” he adds. Bamboochi has come up with seven different types of frames so far. Capt. Shashishekhar builds and fabricates each of these custom-made bicycles; for instance, the handmade bamboo bike custom-made for city biking is made to resist the rain and the terrain of the city roads. These bike frames are priced at Rs 25,000 and the total cost depends on customer’s choice of other components like drive train, wheels, or the front fork. We insist on quality components for the bicycle so the rider enjoys the uniqueness of Bamboochi. Bamboochi frame is with three years warranty against natural and manufacturing flaws.",cost:6999,points:["three years warranty against natural and manufacturing flaws","sprints like the best carbon bikes","better impact, scratch resistance and low brittleness of the bamboo tubes"],images:["b1.jpeg","b2.jpeg","b3.jpeg"].map((n)=>`assets/img/${n}`)}
 
    ];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit(): void {

  }

}
