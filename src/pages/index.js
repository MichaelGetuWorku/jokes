import {Inter} from "next/font/google";
import styles from './index.module.css';
import {useEffect, useState} from "react";

const inter = Inter({subsets: ["latin"]});

export default function Home() {

    const [catagory, setCategory] = useState('');
    const [joke, setJoke] = useState('');


    const getMeAJoke = () => {
        fetch('https://v2.jokeapi.dev/joke/Any?type=single')
            .then(response => {
                // Check if the request was successful (status code 200)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse the JSON data received from the server
                return response.json();
            })
            .then(data => {
              setCategory(data.category);
              setJoke(data.joke);
            })
            .catch(error => {
                // Handle any errors that occur during the fetch operation
                console.error('Fetch error:', error);
            });        return console.log('What Joke')
    }

    useEffect(() => getMeAJoke(),[]);

    return (
        <main
            className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
        >
            <div className={styles.notification}>
                <div className={styles.notiglow}></div>
                <div className={styles.notiborderglow}></div>
                <div className={styles.notititle}>{catagory}</div>
                <div className={styles.notibody}>{joke}</div>
            </div>
            <button
                className="relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95"
                onClick={getMeAJoke}
            >
  <span
      className="w-full h-full flex items-center gap-2 px-8 py-3 bg-[#B931FC] text-[#f1d5fe] rounded-[14px] bg-gradient-to-t from-[#a62ce2] to-[#c045fc]"
  >
    <svg
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        stroke="currentColor"
        fill="none"
        className="w-5 h-5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z"
      ></path></svg
    >Tell Joke</span
  >
            </button>

        </main>
    );
}
