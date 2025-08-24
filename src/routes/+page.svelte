<script>
    import { onMount } from 'svelte';

    let data = {};
    let errorOccurred = false;

    async function fetchData() {
        try {
            errorOccurred = false;

            //const response = await fetch('https://screeps.newbieland.net/stats');
            const response = await fetch(`/api/stats?targetUrl=${encodeURIComponent("https://screeps.newbieland.net/stats")}`);
            const result = await response.json();

            if (response.ok) {
                data = result;
            } else {
                throw new Error(result.error || 'Failed to fetch data');
            }
        } catch (error) {
            console.error('Data fetch error:', error);
            errorOccurred = true;
        }
    }

    onMount(() => {
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => {
            clearInterval(interval);
        };
    });
</script>

<section class="text-gray-400 bg-gray-900 body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <!-- You can replace the src link with an actual image related to Screeps -->
            <img class="object-cover object-center rounded" alt="Screeps game" src="/screeps.png">
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Screeps: The World of Coding and Strategy
                <br class="hidden lg:inline-block">A Universe for Programmers
            </h1>

            <p class="mb-8 leading-relaxed">Dive into a persistent world where you develop your coding strategies to claim and defend your territory. Screeps is more than a game; it's a coding platform where each strategic move is an actual script. You'll use JavaScript to control your units, harness resources, and outsmart real human opponents. Every success and setback is a lesson in code and strategy in the unbounded space of Screeps.</p>

            <div class="flex justify-center">
                <!-- These buttons link to the game and the main Screeps website -->
                <a href="https://store.steampowered.com/app/464350/Screeps/" target="_blank" rel="noopener noreferrer" class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Play Now</a>
                <a href="https://screeps.com/" target="_blank" rel="noopener noreferrer" class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Visit Website</a>
            </div>
        </div>
    </div>
</section>

<section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Community</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          United by a shared passion for strategy and coding, our community is the core of the Screeps universe. Discover a network of avid programmers and strategists dedicated to mutual growth and the exploration of limitless possibilities within the game.
        </p>
      </div>
      <div class="flex flex-wrap -m-2">

        <div class="p-2 lg:w-1/3 md:w-1/2 w-full lg:mx-auto">
          <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://screeps.com/api/user/badge-svg?username=audite">
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">Audite</h2>
              <p class="text-gray-400">Newbie Land Administrator</p>
            </div>
          </div>
        </div>

        <div class="p-2 lg:w-1/3 md:w-1/2 w-full lg:mx-auto">
          <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://screeps.com/api/user/badge-svg?username=marvintmb">
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">MarvinTMB</h2>
              <p class="text-gray-400">Newbie Land Server Moderator</p>
            </div>
          </div>
        </div>

        <div class="p-2 lg:w-1/3 md:w-1/2 w-full lg:mx-auto">
          <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
            <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://placehold.co/128x128">
            <div class="flex-grow">
              <h2 class="text-white title-font font-medium">Placeholder</h2>
              <p class="text-gray-400">Newbie Land Discord Moderator</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Explore the Ingenious Bots of Screeps</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover the creativity of the Screeps community with unique bots, each with its own strategic flair. Dive in, explore their tactics, and inspire your next winning strategy!
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="lg:w-1/3 sm:w-1/2 p-4">
          <div class="flex relative">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="/the-international.png">
            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1 uppercase">A screeps bot based on communist aesthetics</h2>
              <h1 class="title-font text-lg font-medium text-white mb-3">The International</h1>
              <p class="leading-relaxed">Screeps bot blending automation with hands-on control. It's a learning tool with a community spirit.</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">COMING SOON</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Future Content</h1>
                    <p class="leading-relaxed">Details to be added soon. Other bots will appear here and have their footprint!</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">COMING SOON</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Future Content</h1>
                    <p class="leading-relaxed">Details to be added soon. Other bots will appear here and have their footprint!</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">COMING SOON</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Future Content</h1>
                    <p class="leading-relaxed">Details to be added soon. Other bots will appear here and have their footprint!</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">COMING SOON</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Future Content</h1>
                    <p class="leading-relaxed">Details to be added soon. Other bots will appear here and have their footprint!</p>
                </div>
            </div>
        </div>
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361">
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">COMING SOON</h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">Future Content</h1>
                    <p class="leading-relaxed">Details to be added soon. Other bots will appear here and have their footprint!</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-400 bg-gray-900 body-font">

    <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Newbie Land Server Stats</h1>
          </div>
      <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{data?.activeUsers ?? "NAN"}</h2>
          <p class="leading-relaxed">Players</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{Math.floor(data?.ticks?.avg) ?? "NAN"}</h2>
          <p class="leading-relaxed">Avg. Tickrate</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{data?.gametime ?? "NAN"}</h2>
          <p class="leading-relaxed">Game Time</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">{(data?.activeRooms + "/" + data?.totalRooms) ?? "NAN"}</h2>
          <p class="leading-relaxed">Active Rooms</p>
        </div>
      </div>
    </div>

    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Keep the Server Running Smoothly</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Newbie Land is freely available and does not use microtransactions. Please consider <a href="https://ko-fi.com/audite">donating</a> to keep tick time down as we grow together!
        </p>
      </div>
    </div>
  </section>
