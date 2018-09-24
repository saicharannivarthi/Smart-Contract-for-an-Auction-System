// const assert = require("assert");
// const ganache = require("ganache-cli");
// const Web3 = require("web3");
// const web3 = new Web3(ganache.provider());
const Auction = artifacts.require("./Auction.sol")
const assert = require("assert")
const ethers = require("ethers")


let contractInstance
let contractInstanceAddress
let contractInstanceABI

contract("Auction", (accounts) => {


	const provider = new ethers.providers.Web3Provider(web3.currentProvider);

	beforeEach(async () => {
		contractInstance = await Auction.deployed()
		contractInstanceAddress = contractInstance.address;
		contractInstanceABI = contractInstance.abi;
		contractInstance2 = new ethers.Contract(contractInstanceAddress,contractInstanceABI,provider)

		

   });

	function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


		// 

		it("Deploy", async()=>{
			await contractInstance.setNotary( {from:accounts[1]});
			const notaryAdr = await contractInstance.notaries(0);
			const notaryPayment = await contractInstance.notaryPayments(notaryAdr);
			const owner = accounts[1];
			assert.equal(notaryPayment,0,"payment Equal Not Found");
		})

		 wait(6000);
			

		
			it("Registration of Bidder", async()=>{

			const lenbefore = await contractInstance2.getBiddersLength();
			console.log("Length of bidders before insertion: ",lenbefore);


			const elem1 = { u:5, v:6};
			const elem2 = { u:7, v:8};
			const ar2 = [elem1,elem2]
			const ar1 = {u:1070,v:6};	

			
			const signer = provider.getSigner(accounts[3]);
			contractInstance2 = contractInstance2.connect(signer);

			const res = await contractInstance2.setBidder(ar1,ar2,{ gasLimit: 3000000});
			const lenafter = await contractInstance2.getBiddersLength();
			console.log("Length of bidders after insertion: ",lenafter);
			assert.equal(1,lenafter-lenbefore,"Bidder Couldn't Register");
		
		})

			 it("Registration of Bidder", async()=>{

			const lenbefore = await contractInstance2.getBiddersLength();
			console.log("Length of bidders before insertion: ",lenbefore);


			const elem1 = { u:3, v:1};
			const elem2 = { u:7, v:9};
			const ar2 = [elem1,elem2]
			const ar1 = {u:1,v:2};	

			
			const signer = provider.getSigner(accounts[4]);
			contractInstance2 = contractInstance2.connect(signer);

			const res = await contractInstance2.setBidder(ar1,ar2,{ gasLimit: 3000000});
			const lenafter = await contractInstance2.getBiddersLength();
			console.log("Length of bidders after insertion: ",lenafter);
			assert.equal(1,lenafter-lenbefore,"Bidder Couldn't Register");
		
		})

			
			it("Registration of Bidder", async()=>{

			const lenbefore = await contractInstance2.getBiddersLength();
			console.log("Length of bidders before insertion: ",lenbefore);


			const elem1 = { u:5, v:6};
			const elem2 = { u:7, v:8};
			const ar2 = [elem1,elem2]
			const ar1 = {u:1,v:2};	

			
			const signer = provider.getSigner(accounts[5]);
			contractInstance2 = contractInstance2.connect(signer);

			const res = await contractInstance2.setBidder(ar1,ar2,{ gasLimit: 3000000});
			const lenafter = await contractInstance2.getBiddersLength();
			console.log("Length of bidders after insertion: ",lenafter);
			assert.equal(1,lenafter-lenbefore,"Bidder Couldn't Register");
		
		})
		
		

		it("Registration of notaries", async()=>{

			const lenbefore = await contractInstance2.getNotariesLength();
			console.log("Length of notaries before insertion: ",lenbefore);


			// const elem1 = { u:5, v:6};
			// const elem2 = { u:7, v:8};
			// const ar2 = [elem1,elem2]
			// const ar1 = {u:1,v:2};

			const signer = provider.getSigner(accounts[6]);
			contractInstance2 = contractInstance2.connect(signer);
			const res = await contractInstance2.setNotary({ gasLimit: 3000000});
			const lenafter = await contractInstance2.getNotariesLength();
			console.log("Length of notaries after insertion: ",lenafter);
			assert.equal(1,lenafter-lenbefore,"notary Couldn't Register");
		})



});
