export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
export const abi  = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_name",
				type: "string"
			}
		],
		name: "hello",
		outputs: [
			{
				internalType: "string",
				name: "Hello",
				type: "string"
			}
		],
		stateMutability: "pure",
		type: "function"
	}
]