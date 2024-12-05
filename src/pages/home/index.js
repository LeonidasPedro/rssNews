import React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fetchBreakingNews, fetchRecommendedNews } from "../../../utils/NewsApi";
import { View, ScrollView } from "react-native";
import NewsSection from "../../components/NewsSection/NewsSection";
import { useQuery } from "@tanstack/react-query";
const Home = () => {

  const { data: recommendedNew, isLoading: isRecommendedLoading } = useQuery({
    queryKey: ["recommededNewss"],
    queryFn: fetchRecommendedNews,
  });

  return (
    <>
      <Text>Home page</Text>
        <View>
          <MiniHeader label="Recomendado" />
          <ScrollView
          >
              <NewsSection
                label="Recommendation"
                newsProps={recommendedNew.articles}
              />
          </ScrollView>
        </View>
    </>
  );
};

export default Home;

