
export const Quote = () => {
    const quoteText = "The gift of blood is the gift of life. Donating blood saves lives and brings hope to those in need.";
    const author = " Himanshu Yadav";

    return (
        <div className="bg-gray-800 text-white dark:bg-gray-800 dark:text-white flex justify-center flex-col">

            <div className="max-w-lg">
                <div className="text-6xl font-bold">
                    {quoteText}
                </div>
                <div className="max-w-md text-xl font-semibold text-left mt-4">
                    — {author}
                </div>

            </div>

        </div>
    );
}
