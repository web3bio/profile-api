export default function Home() {
  const endpointItem = {
          alignItems: "center",
          border: "1px solid #ececec",
          textDecoration: "none",
        },
        endpointLeft = {
          alignItems: "center",
          display: "flex",
          
        },
        endpointRight = {
          marginLeft: "auto",
        }

  return (
    <main
      className="web3bio-container p-4 mt-4 mb-4"
    >
      <div className="container grid-md">
        <h1 className="h2 mt-4 mb-4 pt-4 pb-4">
          Hello from <strong className="text-bold">Web3.bio Profile APIs</strong>
        </h1>
        <div className="web3bio-badge mt-4 mb-4">
          <a
            href="https://web3.bio"
            target="_blank"
            className="btn btn-sm btn-primary pt-4 pb-4"
            title="Web3.bio Web3 Identity Graph Search and Link-in-bio Profile Service"
          >
            <span className="mr-2">👋</span>Made with{" "}
            <strong className="text-pride ml-1 mr-1">Web3.bio</strong>
          </a>
        </div>
        <section className="pt-4 pb-4">
          <p>The Web3.bio Profile APIs enable developers to easily and quickly integrate Web3 universal profiles from <span className="text-underline">Ethereum (ENS)</span>, <span className="text-underline">Lens Protocol</span>, <span className="text-underline">Farcaster</span>, and <span className="text-underline">Next.ID</span> into their applications. These APIs are already integrated into <a href="https://web3.bio" target="_blank" className="text-underline text-bold">Web3.bio</a> search and profile services.</p>
          <p>This documentation describes the publicly available endpoints of the Web3.bio Profile API, which is a set of RESTful JSON APIs. It explains how to use them and what they return. Currently, the APIs are offered for free to assist developers in getting started with Web3 profiles. We will do our best to maintain uptime.</p>
        </section>
        <section className="pt-4 pb-4">
          <h2 className="text-bold h4">
            API Endpoints
          </h2>
          <p>The main public API endpoint domain for Web3.bio Profile APIs is <span className="label">api.web3.bio</span>, and the testnet domain is <span className="label">api-staging.web3.bio</span>.</p>
          <a href="#universal-profile-api" className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/{"{"}identity{"}"}</div>
            </div>
            <div className="mr-2" style={endpointRight}>
              <div className="text-small">
                Retrieve Universal profiles across platforms
                <div className="icon icon-arrow-down ml-2" style={{"fontSize": ".75rem"}}></div>
              </div>
            </div>
          </a>
          <a href="#ens-profile-api" className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/ens/{"{"}identity{"}"}</div>
            </div>
            <div className="mr-2" style={endpointRight}>
              <div className="text-small">
                Retrieve an ENS profile
                <div className="icon icon-arrow-down ml-2" style={{"fontSize": ".75rem"}}></div>
              </div>
            </div>
          </a>
          <a href="#lens-profile-api" className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/lens/{"{"}identity{"}"}</div>
            </div>
            <div className="mr-2" style={endpointRight}>
              <div className="text-">
                Retrieve a Lens profile
                <div className="icon icon-arrow-down ml-2" style={{"fontSize": ".75rem"}}></div>
              </div>
            </div>
          </a>
          <a href="#farcaster-profile-api" className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/farcaster/{"{"}identity{"}"}</div>
            </div>
            <div className="mr-2" style={endpointRight}>
              <div className="text-">
                Retrieve a Farcaster profile
                <div className="icon icon-arrow-down ml-2" style={{"fontSize": ".75rem"}}></div>
              </div>
            </div>
          </a>
        </section>

        <section className="pt-4 pb-4" id="universal-profile-api" style={{"marginTop": "4rem"}}>
          <h2 className="text-bold h5">
            Universal Profile API
          </h2>
          <p>Retrieve Universal profiles across platforms </p>
          <div className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/{"{"}identity{"}"}</div>
            </div>
          </div>
          <h3 className="text-bold h6 mt-4">
            Parameter
          </h3>
          <ul>
            <li><strong>identity <span className="label">string</span></strong> - An Ethereum address, an ENS domain, a Lens handle, a Farcaster username (ends with .farcaster), or a Next.ID address.</li>
          </ul>
          <h3 className="text-bold h6 mt-4">
            Examples
          </h3>
          <ul>
            <li><a href="https://api.web3.bio/profile/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" target="_blank">https://api.web3.bio/profile/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045</a></li>
            <li><a href="https://api.web3.bio/profile/vitalik.eth" target="_blank">https://api.web3.bio/profile/vitalik.eth</a></li>
            <li><a href="https://api.web3.bio/profile/stani.lens" target="_blank">https://api.web3.bio/profile/stani.lens</a></li>
            <li><a href="https://api.web3.bio/profile/dwr.farcaster" target="_blank">https://api.web3.bio/profile/dwr.farcaster</a></li>
          </ul>
          
        </section>

        <section className="pt-4 pb-4" id="ens-profile-api" style={{"marginTop": "4rem"}}>
          <h2 className="text-bold h5">
            ENS Profile API
          </h2>
          <p>Retrieve an ENS profile</p>
          <div className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/ens/{"{"}identity{"}"}</div>
            </div>
          </div>
          <h3 className="text-bold h6 mt-4">
            Parameter
          </h3>
          <ul>
            <li><strong>identity <span className="label">string</span></strong> - An Ethereum address or an ENS domain.</li>
          </ul>
          <h3 className="text-bold h6 mt-4">
            Examples
          </h3>
          <ul>
            <li><a href="https://api.web3.bio/profile/ens/0xd8da6bf26964af9d7eed9e03e53415d37aa96045" target="_blank">https://api.web3.bio/profile/ens/0xd8da6bf26964af9d7eed9e03e53415d37aa96045</a></li>
            <li><a href="https://api.web3.bio/profile/ens/vitalik.eth" target="_blank">https://api.web3.bio/profile/ens/vitalik.eth</a></li>
          </ul>
        </section>

        <section className="pt-4 pb-4" id="lens-profile-api" style={{"marginTop": "4rem"}}>
          <h2 className="text-bold h5">
            Lens Profile API
          </h2>
          <p>Retrieve a Lens profile</p>
          <div className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/lens/{"{"}identity{"}"}</div>
            </div>
          </div>
          <h3 className="text-bold h6 mt-4">
            Parameter
          </h3>
          <ul>
            <li><strong>identity <span className="label">string</span></strong> - An Ethereum/Polygon address or a Lens handle.</li>
          </ul>
          <h3 className="text-bold h6 mt-4">
            Examples
          </h3>
          <ul>
            <li><a href="https://api.web3.bio/profile/lens/0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff" target="_blank">https://api.web3.bio/profile/lens/0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff</a></li>
            <li><a href="https://api.web3.bio/profile/lens/stani.lens" target="_blank">https://api.web3.bio/profile/lens/stani.lens</a></li>
          </ul>
        </section>

        <section className="pt-4 pb-4" id="farcaster-profile-api" style={{"marginTop": "4rem"}}>
          <h2 className="text-bold h5">
            Farcaster Profile API
          </h2>
          <p>Retrieve a Farcaster profile</p>
          <div className="s-rounded d-flex mt-4 mb-4 p-1" style={endpointItem}>
            <div className="d-flex" style={endpointLeft}>
              <div className="label label-primary p-2 mr-2">GET</div>
              <div className="mr-2"><span className="text-gray">https://api.web3.bio</span>/profile/farcaster/{"{"}identity{"}"}</div>
            </div>
          </div>
          <h3 className="text-bold h6 mt-4">
            Parameter
          </h3>
          <ul>
            <li><strong>identity <span className="label">string</span></strong> - An Ethereum address or a Farcaster username.</li>
          </ul>
          <h3 className="text-bold h6 mt-4">
            Examples
          </h3>
          <ul>
            <li><a href="https://api.web3.bio/profile/farcaster/0xd7029bdea1c17493893aafe29aad69ef892b8ff2" target="_blank">https://api.web3.bio/profile/farcaster/0xd7029bdea1c17493893aafe29aad69ef892b8ff2</a></li>
            <li><a href="https://api.web3.bio/profile/farcaster/dwr" target="_blank">https://api.web3.bio/profile/farcaster/dwr</a></li>
          </ul>
        </section>
      </div>
    </main>
  )
}
