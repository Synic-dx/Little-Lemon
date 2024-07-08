import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  FormErrorMessage,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";

const BookingForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack px={20} py={10} gap={5}>
        <HStack w={'100%'}>
          <FormControl id="firstName" isInvalid={errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              rules={{
                required: "Enter a valid firstname",
                pattern: /^[A-Za-z]*$/,
              }}
              render={({ field }) => <Input type="text" {...field} />}
            />
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="lastName" isInvalid={errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              rules={{
                required: "Enter a valid lastname",
                pattern: /^[A-Za-z]*$/,
              }}
              render={({ field }) => <Input type="text" {...field} />}
            />
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl id="phoneNumber" isInvalid={errors.phoneNumber} w={'100%'}>
          <FormLabel>Phone Number</FormLabel>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{
              required: "Enter a valid phone number",
              pattern: /^[0-9]*$/,
            }}
            render={({ field }) => <Input type="number" {...field} />}
          />
          <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
        </FormControl>

        <HStack w={'100%'}>
          <FormControl id="date" isInvalid={errors.date}>
            <FormLabel>Date</FormLabel>
            <Controller
              name="date"
              control={control}
              defaultValue=""
              render={({ field }) => <Input type="date" {...field} />}
            />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="time" isInvalid={errors.occasion}>
            <FormLabel>Time</FormLabel>
            <Controller
              name="time"
              control={control}
              defaultValue="18:00:00"
              rules={{ required: "Please select a timing" }}
              render={({ field }) => (
                <Select {...field}>
                  <option value="18:00:00">6PM</option>
                  <option value="19:00:00">7PM</option>
                  <option value="20:00:00">8PM</option>
                  <option value="21:00:00">9PM</option>
                </Select>
              )}
            />
            <FormErrorMessage>{errors.occasion?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        <HStack w={'100%'}>
          <FormControl id="guestCount" isInvalid={errors.guestCount}>
            <FormLabel>Number of Guests</FormLabel>
            <Controller
              name="guestCount"
              control={control}
              defaultValue={1}
              rules={{
                required:
                  "Sorry! We can only accomodate maximum of 10 guests per booking",
                min: 1,
                max: 10,
              }}
              render={({ field }) => <Input type="number" {...field} />}
            />
            <FormErrorMessage>{errors.guestCount?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="occasion" isInvalid={errors.occasion}>
            <FormLabel>Occasion</FormLabel>
            <Controller
              name="occasion"
              control={control}
              defaultValue="anniversary"
              rules={{ required: "Please select an occasion" }}
              render={({ field }) => (
                <Select {...field}>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement</option>
                  <option value="birthday">Birthday</option>
                </Select>
              )}
            />
            <FormErrorMessage>{errors.occasion?.message}</FormErrorMessage>
          </FormControl>
        </HStack>

        <Button type="submit" colorScheme="yellow" mt={4} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} w={'100%'}>
          Reserve Table
        </Button>
      </VStack>
    </form>
  );
};

export default BookingForm;
