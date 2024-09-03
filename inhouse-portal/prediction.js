<script>
    function generateRandomWalkData(startPrice, numPoints) {
        const prices = [startPrice];
        for (let i = 1; i < numPoints; i++) {
            const change = (Math.random() - 0.5) * 2; // Random change between -1 and +1
            const newPrice = prices[i - 1] + change;
            prices.push(newPrice > 0 ? newPrice : prices[i - 1]); // Ensure price stays positive
        }
        return prices;
    }

    const numPoints = 30; // Number of data points (e.g., days)
    const startPrice = 150; // Starting stock price

    // Generate random walk data for the stock prices
    const stockPrices = generateRandomWalkData(startPrice, numPoints);

    // Calculate total mass of food waste reduced and total savings
    let baselineWasteReduction = 1000; // Starting with 1,000 tonnes of food waste reduced
    let savingsPerTonne = 1000; // $1,000 savings per tonne of food waste reduced
    let totalWasteReduction = 0;
    let totalSavings = 0;

    for (let i = 1; i < stockPrices.length; i++) {
        let percentageChange = (stockPrices[i] - stockPrices[i - 1]) / stockPrices[i - 1];
        let additionalReduction = baselineWasteReduction * percentageChange;
        totalWasteReduction += additionalReduction > 0 ? additionalReduction : 0; // Only consider reductions
        totalSavings += additionalReduction > 0 ? additionalReduction * savingsPerTonne : 0;
    }

    console.log("Total Mass of Food Waste Reduced: " + totalWasteReduction.toFixed(2) + " tonnes");
    console.log("Total Dollar Value of Savings: $" + totalSavings.toFixed(2));
</script>
