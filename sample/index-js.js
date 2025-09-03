import{createPublicClient,createWalletClient,custom,defineChain}from "https://esm.sh/viem";
import { contractAddress,abi } from "./constants.js";  

const greetingsButton = document.getElementById("greetingsButton");
const nameElement = document.getElementById("nameElement");
let publicClient;
 let walletClient;

async function greet(){
if(typeof(window.ethereum )!== "undefined"){
    walletClient = createWalletClient({
    transport: custom(window.ethereum)
})
const [connectedAccount] = await walletClient.requestAddresses();
publicClient = createPublicClient({
    transport: custom(window.ethereum)
})
const chain = await getCurrentChainId(walletClient);
const result = await publicClient.readContract({
    address: contractAddress,
    abi,
    functionName:"hello",
    chain,
    account:connectedAccount,
    args:[nameElement.value]
    
})
console.log(result);
greetingsButton.innerText = result;


}

else{
    greetingsButton.innerText = "Please install Metamask";
}

}
async function getCurrentChainId(client){
    const chainId  = await client.getChainId();
    const chain = defineChain({
        id:chainId,
        name: "Anvil Chain",
        nativeCurrency: {
            name:"ETH",
            symbol:"ETH",
            decimals:18
        },
        rpcUrls:{
            default:{
                http:["http://localhost:8545"],
            },
        },

    })
    return chain;
}
 greetingsButton.onclick = greet;