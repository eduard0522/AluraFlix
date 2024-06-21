/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "Roboto": ["Roboto", "sans-serif"]
      },
      colors:{
        frontColor:{
          DEFAULT:"#6BD1FF",
          hover:"#4F9FFD"
        },
        backendColor:{
          DEFAULT:"#00C86F",
          hover:"#00B76F"
        },
        innovaColor:{
          DEFAULT : "#FFBA05",
          hover  : "#FFCD01"
        },
        whiteColor:{
          DEFAULT:"#F5F5F5"
        },
        GrayColor:{
          DEFAULT :"#262626",
          900:"#000000e6"
        },
        BluePoyect:"#2271D1",
        BluePoyectDark:"#03122F",
      },
      boxShadow:{
        "cardsFront": " inset 0px 0px 17px 8px #6BD1FF" ,
        "cardsBack": " inset 0px 0px 17px 8px #00C86F",
        "cardsInnova": "inset 0px 0px 17px 8px #FFBA05 ",
        "BlueCards" : "0px 0px 17px 8px",
        "Botton" : " inset 0px -4px 4px -4px #6BD1FF "
      }
    },
  },
  plugins: [],
}

