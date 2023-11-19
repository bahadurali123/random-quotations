var output = document.getElementById("contaner2");
        var twitter = document.getElementById("twitter");

        var quot = [`Do not feel lonely, the entire universe is inside you.`,
            `Lovers don\' t finally meet somewhere. They\' re in each other all along.`,
            `There are a thousand ways to kneel and kiss the ground; there are a thousand ways to go home again.`,
            `Raise your words, not voice. It is rain that grows flowers, not thunder.`,
            `This place is a dream. Only a sleeper considers it real. Then death comes like dawn, and you wake up laughing at what you thought was your grief.`,
            `Would you become a pilgrim on the road of love? The first condition is that you make yourself humble as dust and ashes.`,
            `You are not a drop in the ocean. You are the entire ocean, in a drop.`,
            `If the foot of the trees were not tied to the earth, they would be pursuing me. For I have blossomed so much, I am the envy of the gardens.`,
            `Stop acting so small. You are the universe in ecstatic motion.`,
            `Don\' t be satisfied with stories, how things have gone with others. Unfold your myth.`,
            `Why do you stay in prison, when the door is so wide open?`,
            `The Prophets accept all agony and trust it. For the water has never feared the fire.`,
            `Your depression is connected to your insolence and refusal to praise.`,
            `Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.`,
            `Everything that is made beautiful and fair and lovely is made for the eye of one who sees.`,
            `Ignore those that make you fearful and sad, that degrade you back towards disease and death.`,
            `There is a candle in your heart, ready to be kindled. There is a void in your soul, ready to be filled. You feel it, don\' t you?`,
            `Words are a pretext. It is the inner bond that draws one person to another, not words.`,
            `Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.`,
            `Set your life on fire. Seek those who fan your flames.`,
            `I know you\' re tired but come, this is the way.`,
            `The wound is the place where the light enters you.`,
            `And so it is, that both the devil and the angelic spirits present us with objects of desire to awaken our power of choice.`,
            `Wherever you are, and whatever you do, be in love.`,
            `I want to sing like the bird\' s sing, not worrying about who hears or what they think.`,
            `When the world pushes you to your knees, you\' re in the perfect position to pray.`,
            `Live life as if everything is rigged in your favour.`,
            `I am not this hair, I am not this skin, I am the soul that lives within.`,
            `Be full of sorrow, that you may become a hill of joy; weep, that you may break into laughter.`,
            `Sell your cleverness and buy bewilderment. Cleverness is mere opinion. Bewilderment brings intuitive knowledge.`,
            `Be empty of worrying. Think of who created thought.`,
            `Let yourself be silently drawn by the strange pull of what you love. It will not lead you astray.`,
            `Don\' t you know yet? It is your light that lights the world.`,
            `Love is the bridge between you and everything.`,
            `Seek the wisdom that will untie your knot. Seek the path that demands your whole being.`,
            `Dance until you shatter yourself.`,
            `It\' s your road, and yours alone, others may walk it with you, but no one can walk it for you.`,
            `Why do you stay in prison when the door is so wide open.`,
            `As you start to walk on the way, the way appears.`,
            `What hurts you, blesses you. Darkness is your candle.`,
            `The only lasting beauty is the beauty of the heart.`,
            `The universe is not outside of you. Look inside yourself; everything that you want, you already are.`,
            `Close your eyes, fall in love, stay there.`,
            `Achieve some perfection yourself, so that you may not fall into sorrow by seeing the perfection in others.`,
            `What is planted in each person\' s soul will sprout.`,
            `In each moment the fire rages, it will burn away a hundred veils. And carry you a thousand steps toward your goal.`,
            `If the light is in your heart, you will find your way home.`,
            `There\' s a field somewhere beyond all doubt and wrongdoing. I\' ll meet you there.`,
            `Be certain that in the religion of Love there are no believers and unbelievers. LOVE embraces all.`,
            `Silence is the language of god, all else is poor translation.`,
            `Sit, be still, and listen.`,
            `Patience is the key to joy.`,
            `If the light is in your heart, you will find your way home.`,
            `Set your life on fire. Seek those who fan your flames.`,
            `Be empty of worrying. Think of who created thought.`,
            `I know you\' re tired but come, this is the way.`,
            `Dance until you shatter yourself.`,
            `Grace comes to forgive and then forgive again.`,
            `Become the sky. Take an axe to the prison wall. Escape.`,
            `Let yourself become living poetry.`,
            `Be soulful. Be kind. Be in love.`,
            `Be an empty page, untouched by words.`,
            `The wealth within you, your essence, is your kingdom.`,
            `To praise the sun is to praise your own eyes.`,
            `Respond to every call that excites your spirit.`,
            `Wherever you stand, be the soul of that place.`,
            `You were born with wings. Why prefer to crawl through life?`,
            `Half-heartedness doesn\' t reach into majesty.`,
            `Look at the moon in the sky, not the one in the lake.`,
            `What is planted in each person\' s soul will sprout.`,
            `The source of now is here.`,
            `You are not meant for crawling, so don\' t. You have wings. Learn to use them and fly.`,
            `Patience with small details makes perfect a large work, like the universe.`,
            `Let us carve gems out of our stony hearts and let them light our path to love.`,
            `Start a huge, foolish project, like Noah… it makes absolutely no difference what people think of you.`,
            `Seek the wisdom that will untie your knot. Seek the path that demands your whole being.`,
            `Whoever has heart\' s doors wide open, could see the sun itself in every atom.`,
            `The message behind the words is the voice of the heart.`,
            `You are not one you are a thousand. Just light your lantern.`,
            `Work. Keep digging your well. Water is there somewhere.`,
            `With every breath, I plant the seeds of devotion, I am a farmer of the heart.`,
            `Everyone has been made for some particular work, and the desire for that work has been put in every heart.`,
            `Achieve some perfection yourself, so that you may not fall into sorrow by seeing the perfection in others.`,
            `Don\' t be satisfied with stories, how things have gone with others. Unfold your myth.`,
            `Whether one moves slowly or with speed, the one who is a seeker will be a finder.`,
            `Be a lamp, or a lifeboat, or a ladder. Help someone\' s soul heal. Walk out of your house like a shepherd.`,
            `Anyone who genuinely and consistently with both hands looks for something will find it.`,
            `In each moment the fire rages, it will burn away a hundred veils. And carry you a thousand steps toward your goal.`,
            `The garden of the world has no limit except in your mind.`,
            `When I am silent, I fall into the place where everything is music.`,
            `There is a life force within your soul, seek that life. There is a gem in the mountain of your body, seek that mine. O traveller, if you are in search of that, don’t look outside, look inside yourself and seek that.`,
            `Love sometimes wants to do us a great favour: hold us upside down and shake all the nonsense out.`,
            `Beauty surrounds us, but usually, we need to be walking in a garden to know it.`,
            `I lost my hat while gazing at the moon, and then I lost my mind.`,
            `Gratitude is the wine for the soul. Go on. Get drunk.`,
            `Either give me more wine or leave me alone.`,
            `Lovers have heartaches that can\' t be cured by drugs or sleep or games, but only by seeing their beloved.`,
            `Conventional opinion is the ruin of our souls.`,
            `Whatever purifies you is the right path, I will not try to define it.`,
            `Let go of your mind and then be mindful. Close your ears and listen.`,
            `The world is a mountain, in which your words are echoed back to you.`,
            `All your anxiety is because of your desire for harmony. Seek disharmony, then you will gain peace.`,
            `Anything which is more than our necessity is poison. It may be power, wealth, hunger, ego, greed, laziness, love, ambition, hate or anything.`,
            `Poetry can be dangerous, especially beautiful poetry because it gives the illusion of having had the experience without actually going through it.`];
        // console.log(quot);


        let quotnumber;
        function randquote() {
            let randomnumber = Math.floor(Math.random() * quot.length);
            quotnumber = `"${quot[randomnumber]}"`;
            output.innerHTML = quotnumber;
            console.log(randomnumber);
            console.log(quot[randomnumber]);
        }
        randquote();

        function next() {
            randquote();
        }
        twitter.addEventListener("click", () => {
            const turl = `https://twitter.com/intent/tweet?text=${quotnumber}`;
            window.open(turl);
            console.log("Click her");
        });
        