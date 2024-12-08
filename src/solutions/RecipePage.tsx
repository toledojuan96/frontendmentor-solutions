const prepItems = [
    <><strong>Total:</strong> Approximately 10 minutes</>,
    <><strong>Preparation:</strong> 5 minutes</>,
    <><strong>Cooking:</strong> 5 minutes</>

]


const ingredients = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: chees, diced vegetables, cooked meats, herbs'

]

const nutrition = [
    <>Calories <strong className="text-amber-800">277kcal</strong></>,
    <>Carbs <strong className="text-amber-800">0g</strong></>,
    <>Protein <strong className="text-amber-800">20g</strong></>,
    <>Fat<strong className="text-amber-800">22g</strong></>
]

const instructions = [
    <><strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well
        mixed. You can add a tablespoon of water or milk for a fluffier texture.</>,
    <><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</>,
    <><strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
        ensure the eggs evenly coat the surface.</>,
    <><strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in
        the middle, sprinkle your chosen fillings over one half of the omelette.</>,
    <><strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
        fillings. Let it cook for another minute, then slide it onto a plate.</>,
    <><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</>
]

const RecipePage = () => {
    const Divider = () => {
        return <div className="w-full h-0.5 bg-stone-100"/>
    }

    return (
        <main className="flex w-full h-full bg-orange-100 items-center justify-center sm:py-20">
            <div className="flex flex-col items-center gap-10 font-outfit bg-white max-w-2xl sm:rounded-xl sm:p-7 ">
                <img src="/recipePage/image-omelette.jpeg" className='max-h-60 sm:max-h-min sm:rounded-xl object-cover' alt="recipe-image"/>
                <div className="flex flex-col gap-7 px-9 sm:px-0 text-stone-600">
                    <h1 className="font-youngSerif text-4xl text-stone-800">Simple Omelette Recipe</h1>
                    <p className="text-base text-black/75">An easy and quick dish, perfect for any meal. This classic
                        omelette
                        combines beaten eggs cooked to
                        perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                    <div className=" bg-rose-50 p-6 rounded-xl flex flex-col gap-4 w-full">
                        <h3 className="text-rose-800 font-semibold text-2xl">Preparation time</h3>
                        <ul className="text-lg">
                            {
                                prepItems.map((item, index) => {
                                    return <li key={index}
                                               className="px-4 flex before:div before:size-1.5 before:bg-rose-800 before:rounded-full items-center before:mr-8">
                                        <p>{item}</p></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-youngSerif text-4xl text-amber-800">Ingredients</h2>
                        <ul className="ml-2 flex flex-col gap-3">
                            {ingredients.map((item, index) => {
                                return <li key={index} className="flex items-center gap-7">
                                    <div
                                        className="before:size-1.5 before:bg-rose-800 before:flex before:rounded-full"/>
                                    <p className="text-lg ">{item}</p>
                                </li>
                            })}
                        </ul>
                    </div>
                    <Divider/>
                    <div className="flex flex-col gap-5">
                        <h2 className="font-youngSerif text-4xl text-amber-800">Instructions</h2>
                        <div className="flex ml-6">
                            <ol className="list-decimal list-outside marker:text-amber-800 marker:before:ml-2 marker:font-bold space-y-3">
                                {instructions.map((item, index) => {
                                    return (
                                        <li key={index} className="pl-3 text-lg">
                                            {item}
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                    <Divider/>
                    <div className="flex flex-col gap-5 pb-10 sm:pb-0">
                        <h2 className="text-amber-800 text-4xl font-youngSerif">Nutrition</h2>
                        <p className="text-lg">The table below shows nutritional values per serving without the
                            additional
                            fillings.</p>
                        <ul>
                            {nutrition.map((item, index) => {
                                return (
                                    <>
                                        <li key={index}
                                            className="grid grid-cols-2 justify-items-start pl-4 py-4 text-xl">
                                            {item}
                                        </li>
                                        {
                                            index !== 3 && <Divider/>
                                        }
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RecipePage;