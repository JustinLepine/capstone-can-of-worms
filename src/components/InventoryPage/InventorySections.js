import Images from "../../assets/icons/index";

const InventorySections = [
    {
        id: 0,
        title: "Crankbait",
        content: "Crankbait is a fishing lure often made from hard ABS plastic, some have metal bearings inside to create noise and attract predator fish. The bait usually takes shape of a small and or injured fish. Most crankbaits include a diving bill to dive the bait lower into the water, longer the bill deeper they dive when reeling in.",
        category: "crankbait",
        logo: Images.CrankbaitDark
    },
    {
        id: 1,
        title: "Frogs",
        content: "Frog lures can be considered topwater lures but mimic the typical frog and its movements. They float on the top of the water and can be skipped across lily pads. With hooks hidden inside of the soft plastic body this lure is sure to catch larger fish looking for a snack.",
        category: "frogs",
        logo: Images.FrogDark
    },
    {
        id: 2,
        title: "Top Water",
        content: "Topwater bait are also known as surface lures. These lures are often made from wood or plastic and are designed to float. In this category there are 3 popular types (poppers, walkers, and wobblers). These lures are cast out and retrieved slowly, some splash around to attract predators.",
        category: "topwater",
        logo: Images.PopperDark
    },
    {
        id: 3,
        title: "Soft Baits",
        content: "Soft bait are hybrid plastic lures made to look like worms and other small creatures. They are very effective in areas with a lot of weeds and obstacles. You are able to hide the hook inside the soft bait to avoided getting snagged on objects. The down side to soft baits is that they are not reusable in most cases.",
        category: "softbait",
        logo: Images.GummyDark
    }
]

export default InventorySections;