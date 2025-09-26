const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// Anime database with Anilist mappings
const animeDatabase = [
  { slug: "ghost-in-the-shell-arise", anilistId: 15887, normalizedTitle: "ghost-in-the-shell-arise" },
  { slug: "shoot-goal-to-the-future", anilistId: 132374, normalizedTitle: "shoot-goal-to-the-future" },
  { slug: "death-note", anilistId: 1535, normalizedTitle: "death-note" },
  { slug: "pokemon-concierge", anilistId: 156717, normalizedTitle: "pokmon-concierge" },
  { slug: "naruto-shippuden", anilistId: 1735, normalizedTitle: "naruto-shippuden" },
  { slug: "ive-been-killing-slimes-for-300-years-and-maxed-out-my-level", anilistId: 110784, normalizedTitle: "ive-been-killing-slimes-for-300-years-and-maxed-out-my-level" },
  { slug: "baki-hanma", anilistId: 113717, normalizedTitle: "baki-hanma" },
  { slug: "yaiba-samurai-legend", anilistId: 2476, normalizedTitle: "yaiba-samurai-legend" },
  { slug: "toilet-bound-hanako-kun", anilistId: 108632, normalizedTitle: "toiletbound-hanakokun" },
  { slug: "dekin-no-mogura-the-earthbound-mole", anilistId: 172265, normalizedTitle: "dekin-no-mogura-the-earthbound-mole" },
  { slug: "my-dress-up-darling", anilistId: 132405, normalizedTitle: "my-dressup-darling" },
  { slug: "new-saga", anilistId: 172267, normalizedTitle: "new-saga" },
  { slug: "reborn-as-a-vending-machine-i-now-wander-the-dungeon", anilistId: 151661, normalizedTitle: "reborn-as-a-vending-machine-i-now-wander-the-dungeon" },
  { slug: "horimiya", anilistId: 124845, normalizedTitle: "horimiya" },
  { slug: "lord-of-mysteries", anilistId: 172269, normalizedTitle: "lord-of-mysteries" },
  { slug: "ultraviolet-code-044", anilistId: 172271, normalizedTitle: "ultraviolet-code-044" },
  { slug: "vipers-creed", anilistId: 172273, normalizedTitle: "vipers-creed" },
  { slug: "akuma-kun", anilistId: 172275, normalizedTitle: "akuma-kun" },
  { slug: "kurozuka", anilistId: 4898, normalizedTitle: "kurozuka" },
  { slug: "guin-saga", anilistId: 5956, normalizedTitle: "guin-saga" },
  { slug: "valkyria-chronicles", anilistId: 5507, normalizedTitle: "valkyria-chronicles" },
  { slug: "sakamoto-days", anilistId: 172277, normalizedTitle: "sakamoto-days" },
  { slug: "garouden-the-way-of-the-lone-wolf", anilistId: 172279, normalizedTitle: "garouden-the-way-of-the-lone-wolf" },
  { slug: "even-given-the-worthless-appraiser-class-im-actually-the-strongest", anilistId: 172281, normalizedTitle: "even-given-the-worthless-appraiser-class-im-actually-the-strongest" },
  { slug: "leviathan", anilistId: 172283, normalizedTitle: "leviathan" },
  { slug: "gachiakuta", anilistId: 172285, normalizedTitle: "gachiakuta" },
  { slug: "welcome-to-the-outcasts-restaurant", anilistId: 172287, normalizedTitle: "welcome-to-the-outcasts-restaurant" },
  { slug: "clevatess", anilistId: 172289, normalizedTitle: "clevatess" },
  { slug: "paradox-live-the-animation", anilistId: 156717, normalizedTitle: "paradox-live-the-animation" },
  { slug: "murder-drones", anilistId: 172291, normalizedTitle: "murder-drones" },
  { slug: "kaguya-sama-love-is-war", anilistId: 101921, normalizedTitle: "kaguyasama-love-is-war" },
  { slug: "classroom-of-the-elite", anilistId: 98444, normalizedTitle: "classroom-of-the-elite" },
  { slug: "mob-psycho-100", anilistId: 100876, normalizedTitle: "mob-psycho-100" },
  { slug: "teogonia", anilistId: 172293, normalizedTitle: "teogonia" },
  { slug: "one-punch-man", anilistId: 21087, normalizedTitle: "onepunch-man" },
  { slug: "the-shiunji-family-children", anilistId: 172295, normalizedTitle: "the-shiunji-family-children" },
  { slug: "the-gorilla-gods-go-to-girl", anilistId: 172297, normalizedTitle: "the-gorilla-gods-goto-girl" },
  { slug: "i-parry-everything", anilistId: 172299, normalizedTitle: "i-parry-everything" },
  { slug: "let-this-grieving-soul-retire", anilistId: 172301, normalizedTitle: "let-this-grieving-soul-retire" },
  { slug: "overlord", anilistId: 93483, normalizedTitle: "overlord" },
  { slug: "catch-me-at-the-ballpark", anilistId: 172303, normalizedTitle: "catch-me-at-the-ballpark" },
  { slug: "once-upon-a-witchs-death", anilistId: 172305, normalizedTitle: "once-upon-a-witchs-death" },
  { slug: "mobile-suit-gundam-gquuuuuux", anilistId: 172307, normalizedTitle: "mobile-suit-gundam-gquuuuuux" },
  { slug: "jojos-bizarre-adventure", anilistId: 21039, normalizedTitle: "jojos-bizarre-adventure" },
  { slug: "devil-may-cry", anilistId: 2001, normalizedTitle: "devil-may-cry" },
  { slug: "the-beginning-after-the-end", anilistId: 172309, normalizedTitle: "the-beginning-after-the-end" },
  { slug: "the-unaware-atelier-meister", anilistId: 172311, normalizedTitle: "the-unaware-atelier-meister" },
  { slug: "the-magical-girl-and-the-evil-lieutenant-used-to-be-archenemies", anilistId: 172313, normalizedTitle: "the-magical-girl-and-the-evil-lieutenant-used-to-be-archenemies" },
  { slug: "oddballs", anilistId: 172315, normalizedTitle: "oddballs" },
  { slug: "wolf-king", anilistId: 172317, normalizedTitle: "wolf-king" },
  { slug: "mighty-monsterwheelies", anilistId: 172319, normalizedTitle: "mighty-monsterwheelies" },
  { slug: "inside-job-2", anilistId: 132277, normalizedTitle: "inside-job" },
  { slug: "blue-eye-samurai", anilistId: 172321, normalizedTitle: "blue-eye-samurai" },
  { slug: "agent-elvis", anilistId: 172323, normalizedTitle: "agent-elvis" },
  { slug: "angry-birds-summer-madness", anilistId: 172325, normalizedTitle: "angry-birds-summer-madness" },
  { slug: "sonic-prime", anilistId: 172327, normalizedTitle: "sonic-prime" },
  { slug: "farzar", anilistId: 172329, normalizedTitle: "farzar" },
  { slug: "tomb-raider-the-legend-of-lara-croft", anilistId: 172331, normalizedTitle: "tomb-raider-the-legend-of-lara-croft" },
  { slug: "super-giant-robot-brothers", anilistId: 172333, normalizedTitle: "super-giant-robot-brothers" },
  { slug: "secret-level", anilistId: 172335, normalizedTitle: "secret-level" },
  { slug: "scott-pilgrim-takes-off", anilistId: 172337, normalizedTitle: "scott-pilgrim-takes-off" },
  { slug: "sausage-party-foodtopia", anilistId: 172339, normalizedTitle: "sausage-party-foodtopia" },
  { slug: "jurassic-world-chaos-theory", anilistId: 172341, normalizedTitle: "jurassic-world-chaos-theory" },
  { slug: "maya-and-the-three", anilistId: 172343, normalizedTitle: "maya-and-the-three" },
  { slug: "hazbin-hotel", anilistId: 172345, normalizedTitle: "hazbin-hotel" },
  { slug: "captain-laserhawk-a-blood-dragon-remix", anilistId: 172347, normalizedTitle: "captain-laserhawk-a-blood-dragon-remix" },
  { slug: "invincible", anilistId: 120280, normalizedTitle: "invincible" },
  { slug: "zig-and-sharko", anilistId: 172349, normalizedTitle: "zig-and-sharko" },
  { slug: "twilight-of-the-gods", anilistId: 172351, normalizedTitle: "twilight-of-the-gods" },
  { slug: "arcane", anilistId: 129822, normalizedTitle: "arcane" },
  { slug: "jentry-chau-vs-the-underworld", anilistId: 172353, normalizedTitle: "jentry-chau-vs-the-underworld" },
  { slug: "batman-caped-crusader", anilistId: 172355, normalizedTitle: "batman-caped-crusader" },
  { slug: "the-legend-of-vox-machina", anilistId: 129822, normalizedTitle: "the-legend-of-vox-machina" },
  { slug: "castlevania-nocturne", anilistId: 142838, normalizedTitle: "castlevania-nocturne" },
  { slug: "castlevania", anilistId: 98444, normalizedTitle: "castlevania" },
  { slug: "the-god-of-high-school", anilistId: 120328, normalizedTitle: "the-god-of-high-school" },
  { slug: "the-dragon-prince", anilistId: 105333, normalizedTitle: "the-dragon-prince" },
  { slug: "as-a-reincarnated-aristocrat-ill-use-my-appraisal-skill-to-rise-in-the-world", anilistId: 151661, normalizedTitle: "as-a-reincarnated-aristocrat-ill-use-my-appraisal-skill-to-rise-in-the-world" },
  { slug: "the-maid-i-hired-recently-is-mysterious", anilistId: 132374, normalizedTitle: "the-maid-i-hired-recently-is-mysterious" },
  { slug: "delicious-in-dungeon", anilistId: 146065, normalizedTitle: "delicious-in-dungeon" },
  { slug: "the-strongest-tanks-labyrinth-raids-a-tank-with-a-rare-9999-resistance-skill-got-kicked-from-the-heros-party", anilistId: 172357, normalizedTitle: "the-strongest-tanks-labyrinth-raids-a-tank-with-a-rare-9999-resistance-skill-got-kicked-from-the-heros-party" },
  { slug: "attack-on-titan", anilistId: 16498, normalizedTitle: "attack-on-titan" },
  { slug: "re-zero-starting-life-in-another-world", anilistId: 21355, normalizedTitle: "re-zero-starting-life-in-another-world" },
  { slug: "aoashi", anilistId: 132374, normalizedTitle: "aoashi" },
  { slug: "chillin-in-another-world-with-level-2-super-cheat-powers", anilistId: 151661, normalizedTitle: "chillin-in-another-world-with-level-2-super-cheat-powers" },
  { slug: "she-professed-herself-pupil-of-the-wise-man", anilistId: 132405, normalizedTitle: "she-professed-herself-pupil-of-the-wise-man" },
  { slug: "the-angel-next-door-spoils-me-rotten", anilistId: 146065, normalizedTitle: "the-angel-next-door-spoils-me-rotten" },
  { slug: "summer-time-rendering", anilistId: 140339, normalizedTitle: "summer-time-rendering" },
  { slug: "more-than-a-married-couple-but-not-lovers", anilistId: 132374, normalizedTitle: "more-than-a-married-couple-but-not-lovers" },
  { slug: "mobile-suit-gundam-the-witch-from-mercury", anilistId: 140339, normalizedTitle: "mobile-suit-gundam-the-witch-from-mercury" },
  { slug: "junji-ito-collection", anilistId: 98444, normalizedTitle: "junji-ito-collection" },
  { slug: "rent-a-girlfriend", anilistId: 120328, normalizedTitle: "rentagirlfriend" },
  { slug: "remonster", anilistId: 151661, normalizedTitle: "remonster" },
  { slug: "villainess-level-99-i-may-be-the-hidden-boss-but-im-not-the-demon-lord", anilistId: 172359, normalizedTitle: "villainess-level-99-i-may-be-the-hidden-boss-but-im-not-the-demon-lord" },
  { slug: "black-butler", anilistId: 4898, normalizedTitle: "black-butler" },
  { slug: "my-happy-marriage", anilistId: 146065, normalizedTitle: "my-happy-marriage" },
  { slug: "black-rock-shooter-dawn-fall", anilistId: 132374, normalizedTitle: "black-rock-shooter-dawn-fall" },
  { slug: "bleach-thousand-year-blood-war", anilistId: 129822, normalizedTitle: "bleach-thousandyear-blood-war" },
  { slug: "ameku-m-d-doctor-detective", anilistId: 172361, normalizedTitle: "ameku-md-doctor-detective" },
  { slug: "code-geass-lelouch-of-the-rebellion", anilistId: 1575, normalizedTitle: "code-geass-lelouch-of-the-rebellion" },
  { slug: "kamikatsu-working-for-god-in-a-godless-world", anilistId: 151661, normalizedTitle: "kamikatsu-working-for-god-in-a-godless-world" },
  { slug: "buddy-daddies", anilistId: 146065, normalizedTitle: "buddy-daddies" },
  { slug: "handyman-saitou-in-another-world", anilistId: 151661, normalizedTitle: "handyman-saitou-in-another-world" },
  { slug: "i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too", anilistId: 151661, normalizedTitle: "i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too" },
  { slug: "akudama-drive", anilistId: 120328, normalizedTitle: "akudama-drive" },
  { slug: "hunter-x-hunter", anilistId: 11061, normalizedTitle: "hunter-x-hunter" },
  { slug: "berserk-of-gluttony", anilistId: 151661, normalizedTitle: "berserk-of-gluttony" },
  { slug: "a-salad-bowl-of-eccentrics", anilistId: 172363, normalizedTitle: "a-salad-bowl-of-eccentrics" },
  { slug: "a-couple-of-cuckoos", anilistId: 132374, normalizedTitle: "a-couple-of-cuckoos" },
  { slug: "my-one-hit-kill-sister", anilistId: 172365, normalizedTitle: "my-onehit-kill-sister" },
  { slug: "reign-of-the-seven-spellblades", anilistId: 151661, normalizedTitle: "reign-of-the-seven-spellblades" },
  { slug: "zom-100-bucket-list-of-the-dead", anilistId: 142838, normalizedTitle: "zom-100-bucket-list-of-the-dead" },
  { slug: "masamune-kuns-revenge", anilistId: 98444, normalizedTitle: "masamunekuns-revenge" },
  { slug: "the-case-study-of-vanitas", anilistId: 129822, normalizedTitle: "the-case-study-of-vanitas" },
  { slug: "my-love-story-with-yamada-kun-at-lv999", anilistId: 146065, normalizedTitle: "my-love-story-with-yamadakun-at-lv999" },
  { slug: "im-in-love-with-the-villainess", anilistId: 151661, normalizedTitle: "im-in-love-with-the-villainess" },
  { slug: "trapped-in-a-dating-sim-the-world-of-otome-games-is-tough-for-mobs", anilistId: 151661, normalizedTitle: "trapped-in-a-dating-sim-the-world-of-otome-games-is-tough-for-mobs" },
  { slug: "tomo-chan-is-a-girl", anilistId: 132374, normalizedTitle: "tomochan-is-a-girl" },
  { slug: "fairy-tail", anilistId: 6702, normalizedTitle: "fairy-tail" },
  { slug: "the-wrong-way-to-use-healing-magic", anilistId: 172367, normalizedTitle: "the-wrong-way-to-use-healing-magic" },
  { slug: "fairy-tail-100-years-quest", anilistId: 172369, normalizedTitle: "fairy-tail-100-years-quest" },
  { slug: "the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat", anilistId: 151661, normalizedTitle: "the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat" },
  { slug: "relife", anilistId: 30015, normalizedTitle: "relife" },
  { slug: "ranking-of-kings-the-treasure-chest-of-courage", anilistId: 142838, normalizedTitle: "ranking-of-kings-the-treasure-chest-of-courage" },
  { slug: "ranking-of-kings", anilistId: 129822, normalizedTitle: "ranking-of-kings" },
  { slug: "frieren-beyond-journeys-end", anilistId: 146065, normalizedTitle: "frieren-beyond-journeys-end" },
  { slug: "radiant", anilistId: 101921, normalizedTitle: "radiant" },
  { slug: "the-red-ranger-becomes-an-adventurer-in-another-world", anilistId: 172371, normalizedTitle: "the-red-ranger-becomes-an-adventurer-in-another-world" },
  { slug: "solo-leveling", anilistId: 142838, normalizedTitle: "solo-leveling" },
  { slug: "im-getting-married-to-a-girl-i-hate-in-my-class", anilistId: 172373, normalizedTitle: "im-getting-married-to-a-girl-i-hate-in-my-class" },
  { slug: "possibly-the-greatest-alchemist-of-all-time", anilistId: 172375, normalizedTitle: "possibly-the-greatest-alchemist-of-all-time" },
  { slug: "vampire-dormitory", anilistId: 172377, normalizedTitle: "vampire-dormitory" },
  { slug: "the-reincarnation-of-the-strongest-exorcist-in-another-world", anilistId: 151661, normalizedTitle: "the-reincarnation-of-the-strongest-exorcist-in-another-world" },
  { slug: "the-many-sides-of-voice-actor-radio", anilistId: 172379, normalizedTitle: "the-many-sides-of-voice-actor-radio" },
  { slug: "the-great-cleric", anilistId: 151661, normalizedTitle: "the-great-cleric" },
  { slug: "the-detective-is-already-dead", anilistId: 129822, normalizedTitle: "the-detective-is-already-dead" },
  { slug: "the-apothecary-diaries", anilistId: 146065, normalizedTitle: "the-apothecary-diaries" },
  { slug: "the-ancient-magus-bride", anilistId: 98444, normalizedTitle: "the-ancient-magus-bride" },
  { slug: "welcome-to-demon-school-iruma-kun", anilistId: 110784, normalizedTitle: "welcome-to-demon-school-irumakun" },
  { slug: "dead-mount-death-play", anilistId: 142838, normalizedTitle: "dead-mount-death-play" },
  { slug: "an-archdemons-dilemma-how-to-love-your-elf-bride", anilistId: 172381, normalizedTitle: "an-archdemons-dilemma-how-to-love-your-elf-bride" },
  { slug: "why-raeliana-ended-up-at-the-dukes-mansion", anilistId: 146065, normalizedTitle: "why-raeliana-ended-up-at-the-dukes-mansion" },
  { slug: "my-unique-skill-makes-me-op-even-at-level-1", anilistId: 151661, normalizedTitle: "my-unique-skill-makes-me-op-even-at-level-1" },
  { slug: "my-tiny-senpai", anilistId: 132374, normalizedTitle: "my-tiny-senpai" },
  { slug: "metallic-rouge", anilistId: 172383, normalizedTitle: "metallic-rouge" },
  { slug: "true-beauty", anilistId: 172385, normalizedTitle: "true-beauty" },
  { slug: "bartender-glass-of-god", anilistId: 172387, normalizedTitle: "bartender-glass-of-god" },
  { slug: "dr-stone", anilistId: 105333, normalizedTitle: "dr-stone" },
  { slug: "kiteretsu-daihyakka", anilistId: 172389, normalizedTitle: "kiteretsu" },
  { slug: "zenshu", anilistId: 172391, normalizedTitle: "zenshu" },
  { slug: "magic-maker-how-to-make-magic-in-another-world", anilistId: 172393, normalizedTitle: "magic-maker-how-to-make-magic-in-another-world" },
  { slug: "a-condition-called-love", anilistId: 172395, normalizedTitle: "a-condition-called-love" },
  { slug: "tokyo-24th-ward", anilistId: 132374, normalizedTitle: "tokyo-24th-ward" },
  { slug: "miss-kuroitsu-from-the-monster-development-department", anilistId: 132405, normalizedTitle: "miss-kuroitsu-from-the-monster-development-department" },
  { slug: "the-weakest-tamer-began-a-journey-to-pick-up-trash", anilistId: 151661, normalizedTitle: "the-weakest-tamer-began-a-journey-to-pick-up-trash" },
  { slug: "i-was-reincarnated-as-the-7th-prince-so-i-can-take-my-time-perfecting-my-magical-ability", anilistId: 172397, normalizedTitle: "i-was-reincarnated-as-the-7th-prince-so-i-can-take-my-time-perfecting-my-magical-ability" },
  { slug: "mashle-magic-and-muscles", anilistId: 140339, normalizedTitle: "mashle-magic-and-muscles" },
  { slug: "hokkaido-gals-are-super-adorable", anilistId: 132374, normalizedTitle: "hokkaido-gals-are-super-adorable" },
  { slug: "bucchigiri", anilistId: 172399, normalizedTitle: "bucchigiri" },
  { slug: "the-iceblade-sorcerer-shall-rule-the-world", anilistId: 151661, normalizedTitle: "the-iceblade-sorcerer-shall-rule-the-world" },
  { slug: "i-shall-survive-using-potions", anilistId: 151661, normalizedTitle: "i-shall-survive-using-potions" },
  { slug: "viral-hit", anilistId: 172401, normalizedTitle: "viral-hit" },
  { slug: "wind-breaker", anilistId: 172403, normalizedTitle: "wind-breaker" },
  { slug: "one-piece", anilistId: 21, normalizedTitle: "one-piece" },
  { slug: "tsukimichi-moonlit-fantasy", anilistId: 151661, normalizedTitle: "tsukimichi-moonlit-fantasy" },
  { slug: "fire-force", anilistId: 110784, normalizedTitle: "fire-force" },
  { slug: "tokyo-revengers", anilistId: 120328, normalizedTitle: "tokyo-revengers" },
  { slug: "campfire-cooking-in-another-world-with-my-absurd-skill", anilistId: 151661, normalizedTitle: "campfire-cooking-in-another-world-with-my-absurd-skill" },
  { slug: "sword-art-online-alternative-gun-gale-online", anilistId: 101921, normalizedTitle: "sword-art-online-alternative-gun-gale-online" },
  { slug: "spy-x-family", anilistId: 140339, normalizedTitle: "spy-x-family" },
  { slug: "the-daily-life-of-the-immortal-king", anilistId: 120280, normalizedTitle: "the-daily-life-of-the-immortal-king" },
  { slug: "sword-art-online", anilistId: 11757, normalizedTitle: "sword-art-online" },
  { slug: "dragon-ball-daima", anilistId: 172405, normalizedTitle: "dragon-ball-daima" },
  { slug: "rurouni-kenshin-2023", anilistId: 142838, normalizedTitle: "rurouni-kenshin-2023" },
  { slug: "ranma-", anilistId: 172407, normalizedTitle: "ranma-2024" },
  { slug: "mushoku-tensei-jobless-reincarnation", anilistId: 108632, normalizedTitle: "mushoku-tensei-jobless-reincarnation" },
  { slug: "you-are-ms-servant", anilistId: 172409, normalizedTitle: "you-are-ms-servant" },
  { slug: "demon-lord-retry", anilistId: 151661, normalizedTitle: "demon-lord-retry" },
  { slug: "shangri-la-frontier", anilistId: 142838, normalizedTitle: "shangrila-frontier" },
  { slug: "lookism", anilistId: 132374, normalizedTitle: "lookism" },
  { slug: "trillion-game", anilistId: 172411, normalizedTitle: "trillion-game" },
  { slug: "good-bye-dragon-life", anilistId: 172413, normalizedTitle: "good-bye-dragon-life" },
  { slug: "365-days-to-the-wedding", anilistId: 172415, normalizedTitle: "365-days-to-the-wedding" },
  { slug: "dan-da-dan", anilistId: 172417, normalizedTitle: "dan-da-dan" },
  { slug: "assassination-classroom", anilistId: 101921, normalizedTitle: "assassination-classroom" },
  { slug: "ill-become-a-villainess-who-goes-down-in-history", anilistId: 172419, normalizedTitle: "ill-become-a-villainess-who-goes-down-in-history" },
  { slug: "tying-the-knot-with-an-amagami-sister", anilistId: 172421, normalizedTitle: "tying-the-knot-with-an-amagami-sister" },
  { slug: "nina-the-starry-bride", anilistId: 172423, normalizedTitle: "nina-the-starry-bride" },
  { slug: "teen-titans", anilistId: 172425, normalizedTitle: "teen-titans" },
  { slug: "darling-in-the-franxx", anilistId: 101921, normalizedTitle: "darling-in-the-franxx" },
  { slug: "inside-job", anilistId: 132277, normalizedTitle: "inside-job" },
  { slug: "the-amazing-world-of-gumball", anilistId: 172427, normalizedTitle: "the-amazing-world-of-gumball" },
  { slug: "chainsaw-man", anilistId: 140339, normalizedTitle: "chainsaw-man" },
  { slug: "haikyu", anilistId: 20583, normalizedTitle: "haikyu" },
  { slug: "dragon-ball", anilistId: 2236, normalizedTitle: "dragon-ball" },
  { slug: "log-horizon", anilistId: 172429, normalizedTitle: "log-horizon" },
  { slug: "vinland-saga", anilistId: 101348, normalizedTitle: "vinland-saga" },
  { slug: "transformers-rescue-bots", anilistId: 172431, normalizedTitle: "transformers-rescue-bots" },
  { slug: "kim-possible", anilistId: 172433, normalizedTitle: "kim-possible" },
  { slug: "pokemon-horizons-the-series", anilistId: 156717, normalizedTitle: "pokmon-horizons-the-series" },
  { slug: "no-longer-allowed-in-another-world", anilistId: 172435, normalizedTitle: "no-longer-allowed-in-another-world" },
  { slug: "vtuber-legend-how-i-went-viral-after-forgetting-to-turn-off-my-stream", anilistId: 172437, normalizedTitle: "vtuber-legend-how-i-went-viral-after-forgetting-to-turn-off-my-stream" },
  { slug: "wistoria-wand-and-sword", anilistId: 172439, normalizedTitle: "wistoria-wand-and-sword" },
  { slug: "why-does-nobody-remember-me-in-this-world", anilistId: 172441, normalizedTitle: "why-does-nobody-remember-me-in-this-world" },
  { slug: "makeine-too-many-losing-heroines", anilistId: 172443, normalizedTitle: "makeine-too-many-losing-heroines" },
  { slug: "the-elusive-samurai", anilistId: 172445, normalizedTitle: "the-elusive-samurai" },
  { slug: "twilight-out-of-focus", anilistId: 172447, normalizedTitle: "twilight-out-of-focus" },
  { slug: "days-with-my-stepsister", anilistId: 172449, normalizedTitle: "days-with-my-stepsister" },
  { slug: "naruto", anilistId: 20, normalizedTitle: "naruto" },
  { slug: "bye-bye-earth", anilistId: 172451, normalizedTitle: "bye-bye-earth" },
  { slug: "alya-sometimes-hides-her-feelings-in-russian", anilistId: 172453, normalizedTitle: "alya-sometimes-hides-her-feelings-in-russian" },
  { slug: "the-strongest-magician-in-the-demon-lords-army-was-a-human", anilistId: 172455, normalizedTitle: "the-strongest-magician-in-the-demon-lords-army-was-a-human" },
  { slug: "black-clover", anilistId: 98444, normalizedTitle: "black-clover" },
  { slug: "banished-from-the-heros-party-i-decided-to-live-a-quiet-life-in-the-countryside", anilistId: 151661, normalizedTitle: "banished-from-the-heros-party-i-decided-to-live-a-quiet-life-in-the-countryside" },
  { slug: "jujutsu-kaisen", anilistId: 113415, normalizedTitle: "jujutsu-kaisen" },
  { slug: "that-time-i-got-reincarnated-as-a-slime", anilistId: 101348, normalizedTitle: "that-time-i-got-reincarnated-as-a-slime" },
  { slug: "dragon-ball-z-kai", anilistId: 172457, normalizedTitle: "dragon-ball-z-kai" },
  { slug: "kaiju-no-8", anilistId: 142838, normalizedTitle: "kaiju-no-8" },
  { slug: "gods-games-we-play", anilistId: 172459, normalizedTitle: "gods-games-we-play" },
  { slug: "akebis-sailor-uniform", anilistId: 132374, normalizedTitle: "akebis-sailor-uniform" },
  { slug: "quality-assurance-in-another-world", anilistId: 172461, normalizedTitle: "quality-assurance-in-another-world" },
  { slug: "tower-of-god", anilistId: 120328, normalizedTitle: "tower-of-god" },
  { slug: "blue-lock", anilistId: 140339, normalizedTitle: "blue-lock" },
  { slug: "doraemon", anilistId: 172463, normalizedTitle: "doraemon-1979" },
  { slug: "shinchan", anilistId: 172465, normalizedTitle: "shinchan" },
  { slug: "beywheelz", anilistId: 172467, normalizedTitle: "beywheelz" },
  { slug: "hoops", anilistId: 172469, normalizedTitle: "hoops" },
  { slug: "boboiboy", anilistId: 172471, normalizedTitle: "boboiboy" },
  { slug: "the-gutsy-frog", anilistId: 172473, normalizedTitle: "the-gutsy-frog" },
  { slug: "ben-10", anilistId: 172475, normalizedTitle: "ben-10-classic" },
  { slug: "pacific-rim-the-black", anilistId: 120280, normalizedTitle: "pacific-rim-the-black" },
  { slug: "marvels-ultimate-spider-man", anilistId: 172477, normalizedTitle: "marvels-ultimate-spiderman" },
  { slug: "ghost-in-the-shell-sac", anilistId: 110784, normalizedTitle: "ghost-in-the-shell-sac2045" },
  { slug: "marvels-spider-man", anilistId: 172479, normalizedTitle: "marvels-spiderman" },
  { slug: "dino-girl-gauko", anilistId: 172481, normalizedTitle: "dino-girl-gauko" },
  { slug: "tron-uprising", anilistId: 172483, normalizedTitle: "tron-uprising" },
  { slug: "the-legend-of-korra", anilistId: 172485, normalizedTitle: "the-legend-of-korra" },
  { slug: "digimon-adventure", anilistId: 172487, normalizedTitle: "digimon-adventure" },
  { slug: "dota-dragons-blood", anilistId: 120280, normalizedTitle: "dota-dragons-blood" },
  { slug: "ben-10-alien-force", anilistId: 172489, normalizedTitle: "ben-10-alien-force" },
  { slug: "ninja-hattori-returns", anilistId: 172491, normalizedTitle: "ninja-hattori-returns" },
  { slug: "johnny-bravo", anilistId: 172493, normalizedTitle: "johnny-bravo" },
  { slug: "inspector-gadget", anilistId: 172495, normalizedTitle: "inspector-gadget" },
  { slug: "ninja-hattori-1981", anilistId: 172497, normalizedTitle: "ninja-hattori-1981" },
  { slug: "disenchantment", anilistId: 101921, normalizedTitle: "disenchantment" },
  { slug: "horrid-henry", anilistId: 172499, normalizedTitle: "horrid-henry" },
  { slug: "beyblade-metal-saga", anilistId: 172501, normalizedTitle: "beyblade-metal-saga" },
  { slug: "kid-cosmic", anilistId: 172503, normalizedTitle: "kid-cosmic" },
  { slug: "he-man-and-the-masters-of-the-universe", anilistId: 172505, normalizedTitle: "heman-and-the-masters-of-the-universe" },
  { slug: "beyblade-burst", anilistId: 172507, normalizedTitle: "beyblade-burst" },
  { slug: "the-last-kids-on-earth", anilistId: 172509, normalizedTitle: "the-last-kids-on-earth" },
  { slug: "doraemon-2005", anilistId: 172511, normalizedTitle: "doraemon-2005" },
  { slug: "the-incredible-hulk", anilistId: 172513, normalizedTitle: "the-incredible-hulk" },
  { slug: "super-shiro", anilistId: 172515, normalizedTitle: "super-shiro" },
  { slug: "blood-of-zeus", anilistId: 120280, normalizedTitle: "blood-of-zeus" },
  { slug: "wizards-tales-of-arcadia", anilistId: 172517, normalizedTitle: "wizards-tales-of-arcadia" },
  { slug: "dragon-ball-super", anilistId: 21634,34, normalizedTitle: "dragon-ball-s normalizedTitle: "dragon-ball-super" },
  { slug:uper" },
  { slug: "3 "3below-tbelow-tales-ofales-of-arcadia",-arcadia", anil anilistId:istId: 172519, 172519, normalizedTitle: normalizedTitle: "3 "3below-tbelow-tales-ofales-of-arcadia" },
  { slug: "trollhunters-tales-of-arcadia", anilistId: 172521, normalizedTitle: "trollhunters-tales-of-arcadia-arcadia" },
  { slug: "trollhunters-tales-of-arcadia", anilistId: 172521, normalizedTitle: "trollhunters-tales-of-" },
  {arcadia" },
  { slug: "dragon-ball slug: "dragon-ball-z", an-z", anilistId: 813,ilistId: 813, normalizedTitle normalizedTitle: ": "dragon-ball-zdragon-ball-z" },
  {" },
  { slug: "star-trek slug: "star-trek-lower-decks", an-lower-decks", anilistId:ilistId: 172 172523,523, normalizedTitle normalizedTitle: "star-t: "star-trek-lower-derek-lower-decks" },
  { slugcks" },
  { slug: "niko: "niko-and-the-and-the-sword-of-sword-of-light-light-2",-2", anilistId:  anilistId:172525, normalizedTitle 172525, normalizedTitle: "niko: "niko-and-the-and-the-sword-of-light-sword-of-light" },
  {" },
  { slug slug: "pokemon: "pokemon-j-journeys-the-seriesourneys-the-series", anilist", anilistId:Id: 114535, 114535, normalizedTitle: " normalizedTitle: "pokpokmon-journeysmon-journeys-the-the-series" },
 -series" },
  { { slug: " slug: "starbeamstarbeam", anilist", anilistId: 172Id: 172527,527, normalized normalizedTitle: "starbeam" },
Title: "starbeam" },
  {  { slug: "big slug: "big-city-greens-city-greens", anilistId", anilistId:: 172529, 172529, normalizedTitle: " normalizedTitle: "big-city-greens"big-city-greens" },
  { slug },
  { slug: "timon-and-p: "timon-and-pumbaa", anumbaa", anilistId: ilistId: 172531,172531, normalizedTitle normalizedTitle: "timon: "timon-and-pumbaa"-and-pumbaa" },
  { slug: },
  { slug: "pokemon-the-series "pokemon-the-series-sun-m-sun-moon",oon", anil anilistIdistId: 98444, normalizedTitle:: 98444, normalizedTitle: "pokmon "pokmon-the-series-sun-moon"-the-series-sun-moon" },
  { },
  { slug: "supa-strik slug: "supaas", anil-strikas", anilistIdistId: 172533, normalizedTitle:: 172533, normalizedTitle: "supa "supa-st-strikas-rookrikas-rookie-seasonie-season" },
 " },
  { slug: "jur { slug: "jurassic-world-campassic-world-camp-cret-cretaceous", anilaceous", anilististId: Id: 120280120280, normalized, normalizedTitle: "Title: "jurassic-worldjurassic-world-camp-camp-cret-cretaceous"aceous" },
  { slug },
  { slug: ": "pokemonpokemon-the-series-the-series-xy",-xy", anilist anilistId: 20663, normalizedTitle: "pokmonId: 20663, normalizedTitle: "pokmon-the-series-the-series-xy" },
  { slug:-xy" },
  { slug: "marvels "marvels-guardians-of-the-gal-guardians-of-the-galaxy", anilaxy", anilistId: 172535istId: 172535, normalized, normalizedTitle:Title: "guardians-of-the-galaxy" },
  "guardians-of-the-galaxy" },
  { slug: " { slug: "americanamerican-dragon-j-dragon-jake-long", anilistake-long", anilistId: 172Id: 172537,537, normalizedTitle normalizedTitle: ": "american-dragon-jamerican-dragon-jake-long" },
  {ake-long" },
  { slug: slug: "john "johnny-test-2ny-test-2", an", anilistilistId:Id: 172539, 172539, normalizedTitle normalizedTitle: ": "johnnyjohnny-test" },
 -test" },
  { slug { slug: ": "pokemonpokemon-the-series-the-series-black-white", anilist-black-white", anilistId: 110Id: 11061, normalizedTitle: "61, normalizedTitle:pokmon-the-series "pokmon-the-series-black-white"-black-white" },
  },
  { slug: " { slug: "starstar-wars-the-b-wars-the-bad-batch", anilad-batch", anilistIdistId: 120280, normalizedTitle:: 120280, normalizedTitle: "star "star-wars-wars-the-b-the-bad-batchad-batch"" },
  { slug },
  { slug: ": "star-wstar-wars-resistance", anilistIdars-resistance", anilistId: : 172541172541, normalized, normalizedTitle: "star-warsTitle: "star-wars-resistance-resistance" },
  {" },
  { slug slug: "star-w: "star-wars-rebels", anars-rebels", anilistIdilistId: : 172543172543, normalized, normalizedTitle: "starTitle: "star-wars-wars-reb-rebels"els" },
  { slug },
  { slug:: "pokemon "pokemon-the-series-the-series-diamond-and-diamond-and-pe-pearl", anilarl", anilistIdistId: : 15651565, normalized, normalizedTitle: "pokmon-theTitle: "pokmon-the-series-d-series-diamondiamond-and-pearl" },
-and-pearl" },
  { slug:  { slug: "young "young-justice-justice", anilist", anilistId:Id: 172 172545,545, normalizedTitle: normalizedTitle: " "young-justice"young-justice" },
  },
  { slug { slug: ": "kick-buttowskikick-buttowski-suburban-suburban-dare-daredevildevil", anilist", anilistIdId: 172: 172547,547, normalizedTitle: " normalizedTitle: "kick-buttowskikick-buttowski-suburban-suburban-daredevil-daredevil" },
  {" },
  { slug: "gravity-falls slug: "gravity-falls", an", anilistilistId:Id: 172549, 172549, normalizedTitle normalizedTitle: ": "gravity-falls" },
 gravity-falls" },
  { slug { slug: ": "marvelmarvels-hs-hulk-and-theulk-and-the-agents-of-agents-of-s-m-a-s-h",-s-m-a-s-h", anil anilistId: istId: 172551172551, normalized, normalizedTitle:Title: "mar "marvels-hulkvels-hulk-and-the-and-the-agents-agents-of-sm-of-smash"ash" },
  { slug },
  { slug: ": "fast-ffast-furious-spurious-spy-y-racers", anilistId:racers", anilistId: 172553 172553,, normalizedTitle: " normalizedTitle: "fast-ffast-furious-spy-urious-spy-racers" },
  {racers" },
  { slug: "og slug: "oggy-and-the-cgy-and-the-cockroachesockroaches", anilistId: ", anilistId: 172555, normalizedTitle172555, normalizedTitle: "oggy: "oggy-and-the-cockro-and-the-cockroaches" },
  {aches" },
  { slug: "ph slug: "phineas-and-ferineas-and-ferb", anilistIdb", anilistId: : 172557, normalizedTitle:172557, normalizedTitle: "phineas-and-fer "phineas-and-ferb" },
 b" },
  { slug: "pokemon { slug: "pokemon-the-series-the-series-ruby-and-sapphire", an-ruby-and-sapphire", anilistId:ilistId: 527, normalizedTitle: 527, normalizedTitle: "pokmon-the "pokmon-the-series-ruby-and-s-series-ruby-and-sapphire" },
 apphire" },
  { slug: " { slug: "what-if", anilwhat-if", anilistId: 120istId: 120280, normalizedTitle:280, normalizedTitle: "what-if "what-if" },
" },
  { slug:  { slug: "love "love-death-rob-death-robots", anilots", anilistId: 101921istId: 101921, normalizedTitle:, normalizedTitle: "love-death-rob "love-death-robots" },
 ots" },
  { slug: "iron { slug: "iron-man-armored-man-armored-adventures", anilist-adventures", anilistId: Id: 172559172559, normalizedTitle, normalizedTitle: "iron-man-armored: "iron-man-armored-advent-adventures"ures" },
  },
  { slug: "pokemon { slug: "pokemon-the-series-gold-and-s-the-series-gold-andilver", anil-silver", anilistId: istId: 527, normalizedTitle: "527, normalizedTitle: "pokmon-the-seriespokmon-the-series-gold-and-s-gold-and-silver" },
  { slugilver" },
  { slug: "iron-man: "iron-man",", anilistId: anilistId: 172561, 172561, normalizedTitle: " normalizedTitle: "ironiron-man" },
  {-man" },
  { slug: "star-wars slug: "star-wars-visions", an-visions", anilistId: ilistId: 120280, normalizedTitle: "star-w120280, normalizedTitle: "star-wars-visars-visions" },
  {ions" },
  { slug: "generator-rex", slug: "generator-rex", anilistId: anilistId: 172 172563, normalizedTitle: "generator563, normalizedTitle: "generator-rex-rex" },
" },
  { slug  { slug: "kung-fu-p: "kung-fu-panda-theanda-the-paws-of-paws-of-destiny-destiny", an", anilistilistId:Id: 172 172565, normalizedTitle565, normalizedTitle: ": "kungkung-fu-fu-panda-the-p-panda-the-paws-ofaws-of-destiny"-destiny" },
  { },
  slug: "pokemon-the-series { slug: "pokemon-the-series-the-beginning-the-beginning", anilistId:", anilistId: 527, normalized 527, normalizedTitle: "pokTitle: "pokmon-the-series-the-beginmon-the-series-the-beginning" },
  { slug: "avatar-thening" },
  { slug: "avatar-the-last-last-airbender-airbender", an", anilistIdilistId: 172567, normalized: 172567Title: "avatar-the-last-airbender, normalizedTitle: "avatar-the-last-airbender" },
  { slug:" },
  { slug: "transformers- "transformers-robots-in-disguiserobots-in-disguise", anilist", anilistId: 172Id: 172569,569, normalizedTitle normalizedTitle: ": "transformers-robtransformers-robots-inots-in-disguise" },
  { slug-disguise" },
  { slug: ": "transformers-war-fortransformers-war-for-cy-cybertron-trilbertron-trilogy",ogy", anil anilistIdistId: 172: 172571, normalized571, normalizedTitleTitle: "transform: "transformers-warers-war-for-cy-for-cybertron-tbertron-trilogyrilogy" },
" },
  {  { slug: slug: "transformers- "transformers-prime",prime", anil anilistIdistId: 172573, normalizedTitle: "transformers-: 172573, normalizedTitle: "transformers-prime" },
  {prime" },
  { slug: "teen-t slug: "teen-titans-go", anitans-go", anilistId: 172ilistId: 172575, normalizedTitle575, normalizedTitle: "teen-titans-go: "teen-titans" },
  {-go" },
  { slug: "https slug: "https-anthe-anthe-avengers-ear-avengers-earths-mightiestths-mightiest-heroes", anil-heroes", anistId:ilistId: 172577, normalized 172577Title: "the-av, normalizedTitle: "the-avengers-earengers-earths-mths-mightiest-heroightiest-heroes" },
es" },
  { slug: "future-  { slug: "future-avengers", anavengers", anilistilistId:Id: 172 172579, normalizedTitle: "marvels-future-avengers579, normalizedTitle: "marvels-future-avengers" },
  {" },
  { slug slug: "av: "avengers-assemble", anilengers-assemble", anilistId: 172581istId: 172581,, normalizedTitle: "marvels-av normalizedTitle: "marvels-avengers" },
engers" },
   { slug: " { slug: "slugterra", anslugterra", anilistId:ilistId: 172583, normalizedTitle 172583, normalizedTitle: "slugterra" },
: "slugterra" },
  { slug:  { slug: "miracul "miraculous-tales-of-ladyous-tales-of-ladybug-cat-nobug-cat-noir",ir", anilist anilistId: 98444,Id: 98444, normalizedTitle: normalizedTitle: "miraculous-t "miraculous-tales-of-ladyales-of-ladybug-cat-noir"bug-cat-noir" },
  },
  { slug: { slug: "ben- "ben-10-reboot", anilistId: 17258510-reboot", anilistId: 172585, normalized, normalizedTitle:Title: "ben-10-reboot" },
 "ben-10-reboot" },
  {  { slug: slug: "ben- "ben-10-10-omniverse",omniverse", anil anilistIdistId: : 172587, normalized172587, normalizedTitleTitle: "ben: "ben-10-omniverse" },
 -10-omniverse" },
  { slug { slug: ": "ben-ben-10-10-ultimate-alien", anilistIdultimate-alien", anilistId: : 172589,172589, normalized normalizedTitle: "Title: "ben-10-ultimate-alben-10-ultimate-alien" },
 ien" },
  { slug { slug: ": "demon-sdemon-slayer", anlayer", anilistIdilistId: : 101922, normalized101922, normalizedTitle: "demonTitle: "demon-slayer-slayer" },
  { slug: "my" },
  { slug:-hero-academia", anilist "my-hero-academia", anilistId: 101348, normalizedTitle: "my-hero-academia"Id: 101348, normalizedTitle: "my-hero-academia" },
  { slug: "kid-v },
  { slug: "kid-vs-kat", anils-kat", anilistId: 172591, normalizedTitle:istId: 172591, normalizedTitle: "kid-vs-kat" },
  "kid-vs-kat" },
  { slug: "transformers-rescue-bots-ac { slug: "transformers-rescue-botsademy", anilistId: 172593, normalizedTitle: "transformers-rescue-bots-academy" }
-academy", anilistId: 172593, normalizedTitle: "transformers-rescue];

// Helper function to find anime by Anilist ID
function findAnimeByAn-bots-academy" }
];

// Helper function to find anime by Anilist ID
function findAnimeByAnilistIdilist(anId(anilistId) {
  return animeilistId) {
  return animeDatabase.find(animeDatabase.find(anime => anime => anime.an.anilistilistId === parseInt(Id === parseInt(anilanilistIdistId));
}

));
}

// Helper// Helper function to find anime function to find anime by slug by slug
function
function findAn findAnimeByimeBySlug(sSlug(slug) {
lug) {
  return  return animeDatabase animeDatabase.find(anime.find(anime => anime => anime.slug.slug === slug === slug);
}

//);
}

// Function to Function to extract video URLs from extract video URLs from various sources
async various sources
async function extractVideoUrls( function extractVideoUrls(iframeUrl)iframeUrl) {
  try {
    console {
  try {
   .log('Extracting console.log('Extracting from:', from:', iframeUrl);
    
    // Handle iframeUrl);
    
    // Handle different video hosting platforms different video hosting platforms
    if (
    if (iframeUrl.includes('streamtaiframeUrl.includes('streamtape')) {
     pe')) {
      return await extractStreamtape return await extractStreamtape(iframe(iframeUrl);
   Url);
    } else if } else if (iframeUrl.includes('d (iframeUrl.includes('dood')) {
     ood')) {
      return await return await extractD extractDoodstreamoodstream(iframeUrl(iframeUrl);
    });
    } else if else if (iframe (iframeUrl.includesUrl.includes('filemoon')('filemoon') || if || iframeUrlrameUrl.includes('.includes('moon'))moon')) {
      {
      return await return await extractFile extractFilemoonmoon(iframeUrl(iframeUrl);
    });
    } else if else if (iframeUrl (iframeUrl.includes.includes('mp4upload('mp4upload')) {
')) {
      return await      return await extract extractMp4UploadMp4Upload(iframeUrl);
(iframeUrl);
    }    } else if else if (iframeUrl.includes('vidstream')) {
      return await extractVidstream (iframeUrl.includes('vidstream')) {
      return await extractVidstream(iframeUrl(iframeUrl);
);
    } else {
      // Try direct iframe content
      const response = await axios.get    } else {
      // Try direct iframe content
      const response = await axios.get(iframeUrl(iframeUrl, {
       , {
        headers: headers: {
          {
          'User-A 'User-Agent': 'gent': 'MozillaMozilla/5/5.0.0 (Windows (Windows NT 10 NT 10.0.0;; Win64; x64 Win64; x64) AppleWeb) AppleWebKit/Kit/537.36',
537.36',
          'Referer': '          'Referer': 'https://watchanhttps://watchanimeworld.in/',
imeworld.in/',
          'Accept':          'Accept': 'text/html, 'text/html,application/xhtml+xml,application/xhtml+xml,application/xml;application/xml;q=0.9,*q=0.9/*;,*/*;q=0.8'
q=0.8'
        }
      });
      
             }
      });
      
      const $ = cheerio.load(response.data);
      
 const $ = cheerio.load(response.data);
      
      // Look for      // Look for direct video sources
 direct video sources
      const videoSources      const videoSources = [];
      $('source = [];
      $('source').').each((i,each((i, el el) => {
       ) => {
        const src = $( const src = $(el).el).attr('attr('src');
        if (src && (src');
        if (src && (src.includes('.mp4') || src.includes('.m3src.includes('.mp4') || src.includes('.m3u8'))) {
         u8'))) {
          videoSources.push({
 videoSources.push({
            quality: $(el).            quality: $(elattr('size')).attr('size') || 'unknown || 'unknown',
            url: src.st',
            url: src.startsWith('httpartsWith('http') ? src : new') ? src : new URL(src, if URL(src, iframeUrl).href
         rameUrl).href });
        }
     
          });
        }
      });
      
      // });
      
      // Look for video Look for video URLs in scripts
      $(' URLs in scripts
      $('script').each((i, el) => {
script').each((i, el) => {
        const scriptContent        const scriptContent = $(el).html();
 = $(el).html();
        if (script        if (scriptContentContent) {
          //) {
          // MP MP4 patterns
         4 patterns
          const mp4Matches const mp4Matches = script = scriptContent.match(/(Content.match(/(https?:\/\/https?:\/\/[^\s"[^\s"']+']+\.mp\.mp44[^\[^\s"']*s"']*)/gi)/gi);
          if);
          if (mp4Matches (mp4Matches) {
           ) {
            mp4 mp4Matches.forEach(url =>Matches.forEach(url => {
              video {
              videoSources.pushSources.push({ quality:({ quality: 'auto 'auto', url', url });
            });
          });
            });
          }
          
          // }
          
          // M3 M3U8 patterns
          const m3U8 patterns
          const m3u8Matches =u8Matches = script scriptContent.match(Content.match(/(https?:\/\//(https?:\/\/[^\s"[^\s"']']+\.m3u+\.m3u8[^\s"8[^\s"']*)/gi);
          if (m']*)/gi);
          if (m3u3u8Matches8Matches) {
            m) {
            m3u3u8Matches8Matches.forEach(url.forEach(url => {
              video => {
              videoSources.pushSources.push({ quality({ quality: 'hls', url: 'hls', url });
            });
          });
            });
          }
          
 }
          
          //          // JW Player JW Player patterns
          if patterns
          if (script (scriptContent.includesContent.includes('('file:')) {
file:')) {
                       const fileMatch const fileMatch = script = scriptContent.match(/Content.match(/filefile:\s*:\s*["']["']([^"([^"']+)']+)["']/);
["']/);
            if (fileMatch)            if (fileMatch) {
 {
                           videoSources.push({ quality: videoSources.push({ quality: 'jw 'jwplayerplayer', url', url: fileMatch: fileMatch[1][1] });
            });
            }
          }
        }
      }
          }
        }
      });
      
 });
      
      return videoSources.length >       return videoSources.length > 0 ? videoSources : [{ quality0 ? videoSources : [{ quality: 'direct',: 'direct', url: iframe url: iframeUrl }];
    }
 Url }];
    }
  } catch (error } catch (error) {
    console.error(') {
    console.error('Error extracting video URLsError extracting video URLs:', error.message);
:', error.message);
    return [{ quality: '    return [{ quality: 'fallbackfallback', url: iframeUrl }];
', url: iframeUrl }];
  }
}

//  }
}

// Specific extractors for different Specific extractors for different hosting platforms
async function hosting platforms
async function extractStreamtape extractStreamtape(url) {
 (url) {
  try {
    const response = await axios.get(url, {
      headers: {
        ' try {
    const response = await axios.get(url, {
      headers: {
        'User-AUser-Agent':gent': 'Mozilla/ 'Mozilla/5.5.0 (0 (Windows NTWindows NT 10.0 10.0;; Win64; Win64; x64 x64) AppleWeb) AppleWebKitKit/537.36/537.36',
       ',
        'Refer 'Referer':er': 'https://watch 'https://watchanimeworld.inanimeworld.in/'
/'
      }
    });
      }
    });
    
    
    const $    const $ = cheer = cheerio.load(responseio.load(response.data.data);
    const scriptContent = $('script:);
    const scriptContent = $('script:contains("contains("ideoo")').html();
ideoo")').html();
    
    if    
    if ( (scriptContent)scriptContent) {
      {
      const match = const match = scriptContent.match(/document\. scriptContent.match(/document\.getElementgetElementById\(ById\(['"]?['"]?ideoideooo['"]?\)\.innerHTML['"]?\)\.innerHTML\s*=\\s*=\s*['"]([^'"]+)s*['"]([^'"]+)['['"]/);
"]/);
      if      if (match) {
 (match) {
        const encoded        const encodedUrl =Url = match match[1].[1].replace(/\\/replace(/\\/g, '');
g, '');
        const        const videoUrl videoUrl = `https:${encoded = `https:${encodedUrl}`;
       Url}`;
        return [{ quality: ' return [{ quality:streamtape', url 'streamtape', url: videoUrl }: videoUrl }];
      }
    }
];
      }
    }
  } catch (error  } catch (error) {
    console) {
    console.error.error('Streamtape extraction('Streamtape extraction error:', error error:', error);
  }
  return);
  }
  return [{ quality: 'stream [{ quality: 'streamtape', urltape', url }];
}

async function }];
}

async function extractDoodstream extractDoodstream(url)(url) {
  try {
 {
  try {
    const response = await axios    const response =.get(url, {
      await axios.get(url, {
      headers: {
        'User-A headers: {
        'User-Agent':gent': 'M 'Mozilla/5ozilla/5..0 (Windows NT0 (Windows NT 10 10.0; Win.0; Win64; x6464; x64) Apple) AppleWebKitWebKit/537/537.36',
       .36',
        'Referer': 'https 'Referer':://watchanime 'https://watchanimeworld.in/'
world.in/'
      }
    });
    
      }
    });
    
       const $ = cheer const $ = cheerio.load(response.data);
   io.load(response.data);
    const scriptContent = const scriptContent = $('script: $('script:contains("contains("pass_md5pass_md5")').html();
    
   ")').html();
    
    if (script if (scriptContentContent) {
) {
      const      const passMd5 passMd5Match =Match = scriptContent.match(/ scriptContent.match(/passpass_md5_md5\s\s*=\s**=\s*['"](['"]([^'[^'"]+)['"]+)['"]"]/);
/);
      const tokenMatch = script      const tokenMatch = scriptContent.matchContent.match(/\?(/\?token=([^'"]token=([^'"]+)/);
      
      if (pass+)/);
      
      if (passMd5Match && tokenMatch) {
        const videoUrl = `Md5Match && tokenMatch) {
        const videoUrl = `https://doodhttps://dood.pm/e/${passMd.pm/e/${passMd5Match[5Match[11]}${tokenMatch]}${tokenMatch[0[0]}`]}`;
       ;
        return [{ quality: 'doodstream', url: videoUrl return [{ quality: 'doodstream', url: video }];
      }
   Url }];
      }
    }
  } catch ( }
  } catch (error) {
    consoleerror) {
    console.error('Dood.error('Doodstreamstream extraction error:', error extraction error:', error);
  }
  return);
  }
  return [{ quality: ' [{ quality: 'doodstream',doodstream', url }];
}

async function url }];
}

async function extractFilemoon(url extractFilemoon(url)) {
  try {
 {
  try {
    const response =    const response = await await axios.get(url, {
 axios.get(url, {
      headers: {
      headers: {
               'User-Agent': 'User-Agent': 'Mozilla/ 'Mozilla/5.0 (Windows5.0 (Windows NT NT 10.0 10.0; Win64;; Win64; x64) AppleWeb x64) AppleWebKit/537.36Kit/537.36',
        'Referer':',
        'Refer 'https://watcher': 'https://watchanimeworld.in/'
animeworld.in      }
    });
/'
      }
    });
    
       
    const $ = cheerio.load const $ = cheerio.load(response.data(response.data);
    const scriptContent);
    const scriptContent = $(' = $('script:contains("sources")').html();
script:contains("sources")').html();
    
    if (    
    if (scriptscriptContent) {
      constContent) {
      const sourceMatch = sourceMatch = scriptContent.match(/sources scriptContent.match(/sources:\s*:\s*\[{\s*\[{\s*file:\s*['"file:\s*['"]([^'"]+)]([^'"]+)['"]/);
['"]/);
      if      if (sourceMatch (sourceMatch)) {
        return [{ {
        return [{ quality: quality: 'file 'filemoonmoon', url: source', url: sourceMatch[1]Match[1] }];
 }];
      }
         }
    }
 }
  } catch (error) {
     } catch (error) {
    console.error('File console.error('Filemoon extraction error:', errormoon extraction error:', error);
  }
 );
  }
  return [{ return [{ quality: 'file quality: 'filemoon', urlmoon', url }];
}

async function extract }];
}

async function extractMp4UploadMp4Upload(url) {
 (url) {
  try {
    const try {
    const response = response = await axios.get await axios.get(url(url, {
      headers, {
      headers:: {
        ' {
        'User-AUser-Agent': 'Mgent': 'Mozilla/5.ozilla/5.0 (0 (Windows NT Windows NT 1010.0; Win.0; Win64; x64)64; x64) Apple AppleWebKit/537WebKit/537.36',
       .36',
        'Refer 'Referer': 'er': 'httpshttps://watchanime://watchanimeworld.inworld.in/'
     /'
      }
 }
    });
    
       });
    
    const $ = cheer const $ = cheerio.loadio.load(response.data);
   (response.data);
    const scriptContent = const scriptContent = $('script:contains(" $('script:contains("src")').src")').html();
    
    if (html();
    
    if (scriptContent) {
scriptContent) {
      const src      const srcMatch = scriptContent.match(/Match = scriptContent.match(/src:\s*['src:\s*['"]([^'"]([^'"]+)['"]+)"]/);
      if (src['"]/);
      if (srcMatch) {
       Match) {
        return [{ quality: return [{ quality: ' 'mp4upload', urlmp4upload', url: srcMatch: srcMatch[1] }];
      }
[1] }];
      }
    }
    }
  }  } catch ( catch (error)error) {
    console.error {
    console.error('Mp4('Mp4Upload extractionUpload extraction error:', error error:', error);
);
  }
  return  }
  return [{ [{ quality: ' quality: 'mp4mp4upload',upload', url }];
 url }];
}

async function}

async function extractV extractVidstream(url)idstream(url) {
  {
  try {
 try {
    const    const response = response = await axios.get(url, {
      headers await axios.get(url, {
      headers: {
        ': {
        'User-Agent': 'MUser-Agent': 'Mozilla/5.ozilla/5.0 (0 (Windows NTWindows NT 10 10.0; Win.0; Win6464; x64; x64) Apple) AppleWebKit/537WebKit/537.36',
        '.36',
        'ReferReferer': 'httpser': 'https://watchanimeworld://watchanimeworld.in/'
      }
.in/'
      }
    });
    
       });
    
    const $ = cheerio.load const $ = cheerio.load(response.data);
   (response.data);
    const scriptContent = const scriptContent = $('script:contains(" $('script:contains("sources")').htmlsources")').html();
    
    if (();
    
    if (scriptContent) {
scriptContent) {
      const sourcesMatch =      const sourcesMatch = scriptContent scriptContent.match(/.match(/sourcessources:\s:\s**\[([^\\[([^\]]+]]+)\]/)\]/);
     );
      if (sources if (sourcesMatch)Match) {
        {
        const url const urlMatch = sourcesMatch = sourcesMatch[1].Match[1].match(/match(/file:\file:\s*['s*['"]("]([^'[^'"]+)"]+)['"]/);
['"]/);
               if (url if (urlMatch)Match) {
          return [{ {
          return [{ quality quality: 'vid: 'vidstream',stream', url: urlMatch url: urlMatch[1] }];
        }
      }
   [1] }];
        }
      }
    }
  } catch }
  } catch ( (error) {
    consoleerror) {
    console.error('Vid.error('Vidstream extraction error:', error);
stream extraction error:', error);
  }
  return  }
  return [{ quality [{ quality: 'vidstream', url }];
: 'vidstream', url }];
}

// --------}

// -------- Anilist Anime Endpoint Anilist Anime Endpoint --------
 --------
appapp.get('/api/anime/:an.get('/api/anime/:anilistId/:seasonilistId/:/:episodeNum',season/:episodeNum', async (req, res) async (req, res) => {
 => {
    const    const { an { anilistilistId, seasonId, season, episodeNum, episodeNum } = } = req.params req.params;

   ;

    try {
        // try {
        // Find anime Find anime by An by Anilistilist ID
        const ID
        const anime anime = findAn = findAnimeByimeByAnilistAnilistIdId(anilist(anilistId);
Id);
        
               
        if (! if (!anime) {
anime) {
            return            return res.status res.status(404(404).json({ 
).json({ 
                error                error: ': 'AnimeAnime not found in database not found in database',
',
                available_anime                available_anime: animeDatabase.slice: animeDatabase.slice(0, 10(0, 10).).map(a => ({map(a => ({ slug: a slug:.slug, anilistId a.slug, anilist: a.anilId: a.anilistId,istId, title: a.normalizedTitle } title: a.normalizedTitle }))
            });
        }

        const animeSlug = anime))
            });
        }

        const animeSlug = anime.slug;

        // Construct.slug;

        // Construct episode URL
        const url = `https episode URL
        const url = `https://watchan://watchanimeworldimeworld.in/episode/${.in/episode/${animeSluganimeSlug}-${}-${season}x${season}x${episodeNum}/`;

        constepisodeNum}/`;

        const response = await axios response = await axios.get(url.get(url, {
            headers, {
            headers:: {
                ' {
                'User-AUser-Agent': 'gent': 'MozillaMozilla/5./5.0 (Windows NT 100 (Windows NT 10.0; Win64; x64.0; Win64; x64) AppleWebKit) AppleWebKit/537/537.36.36',
               ',
                'Accept': ' 'Accept': 'text/htmltext/html,application,application/xhtml/xhtml+xml,application+xml,application/xml/xml;q;q=0=0..9,image/web9,image/webp,*p,*/*;q=/*;q=00.8',
.8',
                'Accept-Language':                'Accept-Language': 'en-US, 'en-US,en;q=0.5en;q=0.5',
                '',
                'ReferReferer': 'httpser': 'https://watch://watchanimeworld.in/',
animeworld.in/',
                'Connection':                'Connection': 'keep-alive',
            'keep-alive',
            },
 },
            timeout:             timeout: 10000
       10000
        });

        const $ = cheer });

        const $ = cheerio.load(response.dataio.load(response.data);

        // Extract episode details);

        // Extract episode details
        const title = $('h1.entry-title').first
        const title = $('h1.entry-title').first().text().text().trim().trim() ||() || `Episode ${ep `Episode ${episodeNumisodeNum}`;
}`;
        const        const description = $(' description = $('divdiv.entry-content.entry-content p p').first').first().text().().text().trim() || '';
trim() || '';
        const        const thumbnail = thumbnail = $(' $('div.post-thumbdiv.post-thumbnail imgnail img').attr').attr('src('src') || '';

') || '';

        //        // Extract embed Extract embed servers and servers and get REAL get REAL video video URLs
        URLs
        const embed const embedServers = [];
        const iframeServers = [];
        const iframePromises = [];

Promises = [];

        $('iframe').each        $('iframe').each((i((i, el, el) =>) => {
            const {
            const src = $( src = $(el).el).attr('attr('src');
            ifsrc');
            if (src (src) {
) {
                iframePromises.push                iframePromises.push(
(
                    extractVideo                    extractVideoUrls(srcUrls(src).then).then(video(videoSources => {
                        embedServers.pushSources => {
                        embedServers.push({
                            name: `Server({
                            name: `Server ${i + 1}` ${i + ,
                           1}`,
                            iframe_url: src,
                            video iframe_url: src,
_sources: video                            video_sources: videoSources,
                            type: detectSources,
                            type: detectServerType(srcServerType(src)
                       )
                        });
                    })
 });
                    })
                               );
            );
            }
        });

        // Wait for all }
        });

        // Wait for all iframe extra iframe extractions to complete
       ctions to complete
        await await Promise.all(iframe Promise.all(iframePromisesPromises);

       );

        // Alternative // Alternative: check for direct: check for direct video sources in the page
 video sources in the page
        if (        if (embedServersembedServers.length ===.length === 0 0)) {
            {
            $('script'). $('script').each((each((i,i, el) => el) => {
                const {
                const scriptContent = scriptContent = $(el). $(el).html();
               html();
                if (script if (scriptContent)Content) {
                    {
                    // Look // Look for direct MP4 for direct MP4 links links
                   
                    const mp const mp4Matches = script4Matches = scriptContent.matchContent.match(/((/(https?https?:\/\/:\/\/[^\[^\s"']s"']+\.+\.mp4[^\mp4[^\s"s"']*']*)/gi)/gi);
                    if ();
                    if (mp4Matches) {
                        mp4Matches.forEachmp4Matches) {
                        mp4Matches.forEach((((url, indexurl, index) => {
                           ) => {
                            embedServ embedServers.push({
                               ers.push({
                                name: `Direct MP4 name: `Direct ${index + 1 MP4 ${index + }`,
                                iframe1}`,
                                iframe_url: url,
_url: url,
                                video_sources                                video_sources: [{: [{ quality: quality: 'direct 'direct', url }],
', url }],
                                type                                type: ': 'direct'
                            });
                        });
                    }
direct'
                            });
                }
                                   });
                    }
                }
            });
        }

        if });
        }

        if (embedServers.length (embedServers.length === 0) {
 === 0) {
            return res.status(            return res.status(404).json({404).json({ error: 'No video error: 'No video sources found for this sources found for this episode' });
        }

        res.json({
            episode' });
        }

        res.json({
            anilist_id anilist_id: parseInt(anilist: parseInt(anilistId),
            animeId),
            anime_slug: animeSlug_slug: animeSlug,
            title:,
            title: anime.normalizedTitle,
 anime.normalizedTitle            season: parseInt(,
            season: parseIntseason),
            episode:(season),
            episode: parseInt(episode parseInt(episodeNum),
            episode_title:Num),
            episode_title: title,
            description title,
            description,
            thumbnail,
           ,
            thumbnail,
            servers servers: embedServers: embedServers,
            source_url,
            source_url: url,
            total: url,
            total_serv_serversers: embedServers.length
       : embedServers.length
        });

    } catch ( });

    } catch (err) {
       err) {
        console console.error('Error fetching.error('Error fetching episode:', err.message);
        
 episode:', err.message);
        
        if (err        if (err.response && err.response.status ===.response && err.response.status 404) {
 === 404) {
            return res.status(404            return res.status(404).json({ 
).json({ 
                error: 'Episode not found',
                message: 'The requested                error: 'Episode not found',
                message: 'The requested episode might episode might not be available yet not be available yet'
'
            });
                   });
        }
        
 }
        
        res        res.status(500)..status(500).json({json({ 
            error: 
            error: 'Failed to fetch episode details 'Failed to fetch',
            details: episode details',
            details: err.message 
        err.message 
        });
    });
    }
});

 }
});

function detectServerfunction detectServerType(url)Type(url) {
    {
    if ( if (url.includes('streamtapeurl.includes('streamtape')) return 'stream')) return 'streamtapetape';
   ';
    if ( if (url.includes('url.includes('dood'))dood')) return 'doodstream';
    if return 'dood (url.includes('stream';
    if (url.includes('filemfilemoon'))oon')) return 'file return 'filemmoon';
oon';
    if (url.includes('    if (url.includes('mp4upload'))mp4upload')) return 'mp4upload';
 return 'mp4upload';
    if (url    if (url.includes('.includes('vidstream')) return 'vidstream';
    if (url.includes('.mp4')) return 'direct';
    if (url.includes('.m3u8'))vidstream')) return 'vidstream';
    if (url.includes('.mp4')) return 'direct';
    if (url.includes('.m3u8 return 'hls';
')) return 'hls';
    return 'embed';
}

// -----    return 'embed';
}

// -------- Search--- Search Anime Endpoint ----- Anime Endpoint --------
app.get('/---
app.get('/api/searchapi/search', async', async (req, (req, res) => {
    const res) => {
    const { query } = req.query;
    
    if (!query) { query } = req.query;
    
    if (!query) {
        {
        return res.status return res.status(400).(400).json({json({ error: error: 'Query parameter 'Query parameter is required is required' });
   ' });
    }

    }

    try {
 try {
        const search        const searchTerm = queryTerm = query.toLowerCase();
        const.toLowerCase();
        const results = anime results = animeDatabase.filter(Database.filter(animeanime => 
            anime.slug => 
            anime.slug.toLowerCase().includes(search.toLowerCase().includes(searchTerm)Term) ||
            ||
            anime.normalized anime.normalizedTitle.toLowerCaseTitle.toLowerCase().includes().includes(searchTerm)
       (searchTerm)
        ).map ).map(an(anime => ({
            slug: anime.sime => ({
            slug: anime.slug,
            anlug,
            anilistId: anime.ilistId: anime.anilistIdanilistId,
            title: anime.n,
            title: anime.normalizedormalizedTitle
       Title
        }));

        }));

        res.json res.json({
           ({
            query,
            results query,
            results,
            total:,
            total: results.length results.length
       
        });
    } catch (err) });
    } catch (err) {
        console {
        console.error('Search error.error('Search error:', err.message:', err.message);
        res.status);
        res.status(500).json({ error: '(500).json({ error: 'Search failedSearch failed' });
    }
});

// --------' });
    }
});

// -------- Direct Direct Video URL Video URL Extraction End Extraction Endpoint --------
apppoint --------
app.get('/.get('/api/extapi/extract', async (req, res) => {
    const { urlract', async (req, res) => {
    const { url } = } = req.query;
    
 req.query;
    
    if (!url) {
    if (!url        return res.status) {
        return res.status(400).json(400).json({ error({ error: 'URL parameter: 'URL parameter is required' });
    }

 is required' });
    }

    try {
           try {
        const video const videoSources = await extractVideoUrlsSources = await extractVideoUrls(url);
        res.json({
(url);
        res.json({
            source_url:            source_url: url,
 url,
                       video_sources video_sources: videoSources,
            total: videoSources,
            total_s_sources: videoSources.length
       ources: videoSources.length
        });
 });
    } catch (    } catch (err) {
        consoleerr) {
        console.error('.error('Extraction error:', err.message);
        res.status(500).Extraction error:', err.message);
        res.status(500).json({ error:json({ error: 'Failed to extract video URLs 'Failed to extract video' });
    }
 URLs' });
    }
});

// --------});

// -------- Start Server Start Server --------
const PORT --------
const PORT = process.env.PORT || 300 = process.env.PORT || 3000;
app.listen(PORT0;
app.listen(PORT, (), () => {
    => {
    console console.log(`🔥 Anime API server.log(`🔥 Anime API server running on port ${ running on port ${PORT}`);
PORT}`);
    console.log(`    console.log(`📺 Total anime in database: ${animeDatabase.length}`);
    console📺 Total anime in database: ${animeDatabase.length}`);
   .log(`🚀 Endpoints:`);
    console.log(`🚀 Endpoints:`);
 console.log(`   GET    console.log(`   /api/anime GET /api/anime/:anilist/:anilistId/:Id/:season/:season/:episodeepisodeNum`);
    consoleNum`);
    console.log(`.log(`   GET   GET /api /api/extract?url/extract?url=EMBED=EMBED_URL`);
    console.log_URL`);
    console.log(`  (`   GET /api GET /api/search?/search?query=namequery=name`);
   `);
    console console.log(`   GET /health`);
});
