import Image from 'next/image'
import dataBanner from "@/images/data-visualization-feat.jpg"
import dataNetwork from "@/images/nueral-graph.png"
import heatMap from "@/images/us-heat-map.webp"
import { Container } from '../PageComponents/Container';

export function DummyPost() {
  return (
    <>
      <Container>
        <div className=" max-w-screen-lg m-auto color">
          <h1 className="flex font-bold text-3xl xl:text-5xl justify-center text-center m-5 mb-10 mt-10 sm:m-0">The future of freight is now</h1>
          {/* <Image src={dataBanner} className=" m-auto mt-2 sm:max-w-lg md:max-w-2xl xl:max-w-5xl "></Image> */}

          <p className="text-sm">Published by Circle Logistics Inc, November 2023</p>
          <p className='flex justify-center mb-1 mt-2'>
            Freight is complicated. But the data doesnt have to be.
            We take complex data from all over the freight and logistics industry and boil it down to the pieces you need.
          </p>

          <hr className="m-10" />

          <h3 className="text-xl m-3 font-bold">Unlocking the Power of Freight Data</h3>
          <p className="indent-5 xl:p-10">
            In today's fast-paced global economy,
            the efficient movement of goods and commodities is crucial.
            Freight data plays a pivotal role in optimizing supply chain operations, ensuring timely deliveries, and enhancing overall productivity.
            This wealth of information encompasses a wide array of variables, from shipment tracking to transportation modes and delivery times,
            all of which contribute to the seamless functioning of the logistics industry.
          </p>

          <hr className="m-10" />

          <h3 className="text-xl m-3 font-bold">The Backbone of Modern Logistics</h3>
          <p className="indent-5 xl:p-10">
            Freight data serves as the backbone of modern logistics,
            offering valuable insights into the entire supply chain. By analyzing this data, companies
            can make informed decisions, optimize routes, reduce transit times, and minimize costs. Real-time
            tracking systems allow for immediate adjustments in response to changing conditions, such as traffic
            delays or weather-related disruptions. With accurate and up-to-date freight data, logistics managers can
            ensure that goods arrive at their destinations on time and in perfect condition.
          </p>
          <Image src={dataNetwork} className=" m-auto mt-5 sm:max-w-lg md:max-w-2xl xl:max-w-5xl "></Image>
          <figcaption className="text-center text-sm italic">All the pretty lines</figcaption>

          <hr className="m-10" />

          <h3 className="text-xl m-3 font-bold">Data-Driven Decision-Making</h3>
          <p className="indent-5 xl:p-10">
            In an era where data rules supreme, the freight industry
            is no exception. Leveraging freight data allows companies to make data-driven decisions that can
            transform their operations. By collecting and analyzing historical data, businesses can identify trends
            and patterns, helping them anticipate future demands and streamline their logistics processes. This proactive
            approach not only enhances efficiency but also reduces the environmental impact of transportation through better
            route planning and resource allocation.
          </p>

          <hr className="m-10" />

          <h3 className="text-xl m-3 font-bold">Enhancing Customer Experience</h3>
          <p className="indent-5 xl:p-10">
            Freight data isn't just about optimizing
            operations; it also plays a significant role in enhancing the customer experience.
            Accurate tracking information empowers customers with real-time updates on the status
            of their shipments, providing transparency and peace of mind. Moreover, by harnessing data
            analytics, companies can personalize their services, tailoring them to individual customer
            preferences and needs. This not only builds customer loyalty but also sets businesses apart in a
            competitive market.
          </p>

          <Image src={heatMap} className=" m-auto mt-5 sm:max-w-lg md:max-w-2xl xl:max-w-5xl "></Image>
          <figcaption className="text-center text-sm italic">Stuff moves everywhere... even off the map!</figcaption>

          <hr className="m-10" />

          <h3 className="text-xl m-3 font-bold"> The Future of Freight Data</h3>
          <p className="indent-5 xl:p-10 mb-10">
            As technology continues to advance, the importance of
            freight data will only grow. With the advent of IoT (Internet of Things) and artificial
            intelligence, the industry will have access to even more granular data, enabling predictive
            analytics and autonomous decision-making. From autonomous vehicles to blockchain-based supply chain transparency,
            the future of freight data promises to revolutionize the way we transport goods, making logistics faster, more efficient,
            and more sustainable.
          </p>


        </div>
      </Container>
    </>
  );
}
