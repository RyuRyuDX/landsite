
export default function Footer(){
  return(
    <div className="">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="text-xl text-black">LAND<br /> HAIR CREATION LAB</span>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-2xl mb-3">
                ACCESS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-black">
                    茨城県日立市千石町<br/>1-19-6 2F 201
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              © 2021 LAND HAIR CREATION LAB
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}