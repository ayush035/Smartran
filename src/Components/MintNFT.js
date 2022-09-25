import { React, useState, useRef } from "react"    
export default function MintNFT() {


    const inputRef = useRef(null);
    const [userName, setUserName] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setimgUrl] = useState("");

    const handleInputChange = (e) => {
        const val = e.target.value
        setUserName(val)
    }
    const handleValueChange = (e) => {
        const val = e.target.value
        setDescription(val)
    }

      const onSubmit = async (params) => {
          const form = new FormData()
          console.log(inputRef)
          form.append("file", inputRef.current.files[0])

          const options = {
              method: "POST",
              body: form,
              headers: {
                  Authorization: "36d29f11-b93a-4327-b571-8b413c3aa163",
              },
          }

          await fetch("https://api.nftport.xyz/v0/files", options)
              .then((response) => {
                  return response.json()
              })
              .then((responseJson) => {
                  // Handle the response
                  console.log(responseJson)
                  console.log(responseJson.ipfs_url)

                  setimgUrl(responseJson.ipfs_url)

                  // const { ipfs_url } = responseJson;
                  // document.getElementById('image').textContent = image;
            })

        await fetch(
            "https://api.nftport.xyz/v0/mints/easy/files?" +
                new URLSearchParams({
                chain: "rinkeby",
                    name: userName,
                    description: description,
                      mint_to_address: "0xccbf6562b2927a40158e41c1551826c5823b0aa5",
                  }),
              options
          )
              .then(function (response) {
                  return response.json()
              })
              .then(function (responseJson) {
                  // Handle the response
                  console.log(responseJson)
              })
      }
    return (
      <div class="mx-auto">
        <font align="center">
          <div className="col-5 justify-center items-center">
            {/* <div className="card"> */}
              {/* <div className="card text-white bg-dark mb-3"> */}
                <div className="card-body">
                  <div className=" flex flex-col justify-center items-center">
                    <div className=" bg-green-100 rounded-3xl p-7 mt-6">
                      <div className="flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="flex flex-col items-center">
                            <div className="font-bold text-2xl">
                              <font color="white" size="4" face="Verdana">
                                {" "}
                                Mint Pension Approval NFTs
                              </font>
                            </div>
                            <div className="flex flex-col mt-8">
                              <input
                                type="text"
                                placeholder="UserName"
                                className="border-[#334155] border bg-green-50 rounded-lg text-black py-2 px-10 w-[400px] mb-5"
                                onChange={handleInputChange}
                              />
                              <input
                                type="text"
                                placeholder="Description"
                                className="border-[#334155] border bg-green-50 rounded-lg text-black py-2 px-10 w-[400px]"
                                onChange={handleValueChange}
                              />
                            </div>
                            <form>
                              <input
                                type="file"
                                className=" bg-green-50 rounded-lg text-black py-2 px-10 w-[400px] mt-5"
                                id="myFile"
                                name="filename"
                                ref={inputRef}
                              />
                            </form>
                          </div>
                          <div className="flex mt-10 mb-10 space-x-4">
                            <button
                              className="btn btn-outline-light"
                              onClick={onSubmit}
                            >
                              <font  size="3">
                                MINT NFT
                              </font>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </font>
      </div>
    );
}