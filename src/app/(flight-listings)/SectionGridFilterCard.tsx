import React, { FC } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { DEMO_FLIGHT_LISTINGS } from "@/data/listings";

export interface SectionGridFilterCardProps {
  className?: string;
}

// Convert flight data to FlightCard format
const DEMO_DATA: FlightCardProps["data"][] = DEMO_FLIGHT_LISTINGS.map((flight) => ({
  id: flight.id.toString(),
  price: flight.price,
  airlines: {
    logo: flight.airline.logo,
    name: flight.airline.name,
  },
}));

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        heading="Available Flights"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            {DEMO_FLIGHT_LISTINGS.length} flights available
            <span className="mx-2">·</span>
            round trip
            <span className="mx-2">·</span>2 Guests
          </span>
        }
      />
      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6  rounded-3xl">
        {DEMO_DATA.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}

        <div className="flex mt-12 justify-center items-center">
          <ButtonPrimary loading>Show more</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
