export default function generateNumber(): string {
    return (Math.random() * (151.00 - 149.00) + 149.00).toFixed(2);
}