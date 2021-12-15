import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2401_2901}>
        <View style={styles.View_I2401_2901_2166_2675}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/efd3/bcb5ff922ef460a117ebcf9740fcfcc5"
            }}
            style={styles.ImageBackground_I2401_2901_2166_2676}
          />
          <View style={styles.View_I2401_2901_2166_2677}>
            <Text style={styles.Text_I2401_2901_2166_2677}>Logo</Text>
          </View>
        </View>
        <View style={styles.View_I2401_2901_1805_3119}>
          <View style={styles.View_I2401_2901_1802_2460}>
            <Text style={styles.Text_I2401_2901_1802_2460}>Dashboard</Text>
          </View>
          <View style={styles.View_I2401_2901_1802_2462}>
            <Text style={styles.Text_I2401_2901_1802_2462}>Jobs</Text>
          </View>
          <View style={styles.View_I2401_2901_1802_2461}>
            <Text style={styles.Text_I2401_2901_1802_2461}>Applicants</Text>
          </View>
          <View style={styles.View_I2401_2901_1802_2463}>
            <Text style={styles.Text_I2401_2901_1802_2463}>Company</Text>
          </View>
        </View>
        <View style={styles.View_I2401_2901_1805_3118}>
          <View style={styles.View_I2401_2901_1802_2464}>
            <View style={styles.View_I2401_2901_1802_2464_2341_5373}>
              <View style={styles.View_I2401_2901_1802_2464_2341_5374}>
                <View style={styles.View_I2401_2901_1802_2464_2341_5375}>
                  <Text style={styles.Text_I2401_2901_1802_2464_2341_5375}>
                    Placeholder
                  </Text>
                </View>
                <View style={styles.View_I2401_2901_1802_2464_2341_5376}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95c6/da65/c317a2f7a18fd952dc963fcb8bcca157"
                    }}
                    style={
                      styles.ImageBackground_I2401_2901_1802_2464_2341_5376_1006_11594
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d81b/c627/36e5386ecebcb22350f2c926a83b5125"
            }}
            style={styles.ImageBackground_I2401_2901_1802_2459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a9/1677/2fe5ccd2922aef190d66901367f289cb"
            }}
            style={styles.ImageBackground_I2401_2901_2342_3410}
          />
        </View>
      </View>
      <View style={styles.View_2401_3136}>
        <View style={styles.View_2401_3122}>
          <View style={styles.View_2401_3119}>
            <Text style={styles.Text_2401_3119}>
              Frequently Asked Questions
            </Text>
          </View>
          <View style={styles.View_2401_3120}>
            <Text style={styles.Text_2401_3120}>
              Can’t find the answer you’re looking for? Reach out to our
              custmore support team.
            </Text>
          </View>
        </View>
        <View style={styles.View_2401_3123}>
          <View style={styles.View_I2401_3123_2341_5319}>
            <View style={styles.View_I2401_3123_2341_5320}>
              <View style={styles.View_I2401_3123_2341_5321}>
                <Text style={styles.Text_I2401_3123_2341_5321}>
                  What do you want to know
                </Text>
              </View>
              <View style={styles.View_I2401_3123_2341_5322}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a22c/7fde/f99d9882a18bd9e87db22b01a07fd9d9"
                  }}
                  style={styles.ImageBackground_I2401_3123_2341_5322_1006_11582}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_2401_3121}>
          <View style={styles.View_2401_3082}>
            <View style={styles.View_I2401_3082_2402_2899}>
              <View style={styles.View_I2401_3082_2402_2900}>
                <View style={styles.View_I2401_3082_2402_2901}>
                  <Text style={styles.Text_I2401_3082_2402_2901}>
                    What’s the company?
                  </Text>
                </View>
                <View style={styles.View_I2401_3082_2402_2902}>
                  <Text style={styles.Text_I2401_3082_2402_2902}>
                    A general overview that includes the name of the company,
                    year it was founded and its goal. For example: Company was
                    founded in 2019, with a goal to bring better products to
                    every home across the US.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2401_3082_2402_2903}>
              <View style={styles.View_I2401_3082_2402_2903_1348_11418} />
            </View>
          </View>
          <View style={styles.View_2401_3090}>
            <View style={styles.View_I2401_3090_2402_2899}>
              <View style={styles.View_I2401_3090_2402_2900}>
                <View style={styles.View_I2401_3090_2402_2901}>
                  <Text style={styles.Text_I2401_3090_2402_2901}>
                    What’s the company?
                  </Text>
                </View>
                <View style={styles.View_I2401_3090_2402_2902}>
                  <Text style={styles.Text_I2401_3090_2402_2902}>
                    A general overview that includes the name of the company,
                    year it was founded and its goal. For example: Company was
                    founded in 2019, with a goal to bring better products to
                    every home across the US.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2401_3090_2402_2903}>
              <View style={styles.View_I2401_3090_2402_2903_1348_11418} />
            </View>
          </View>
          <View style={styles.View_2401_3097}>
            <View style={styles.View_I2401_3097_2402_2899}>
              <View style={styles.View_I2401_3097_2402_2900}>
                <View style={styles.View_I2401_3097_2402_2901}>
                  <Text style={styles.Text_I2401_3097_2402_2901}>
                    What’s the company?
                  </Text>
                </View>
                <View style={styles.View_I2401_3097_2402_2902}>
                  <Text style={styles.Text_I2401_3097_2402_2902}>
                    A general overview that includes the name of the company,
                    year it was founded and its goal. For example: Company was
                    founded in 2019, with a goal to bring better products to
                    every home across the US.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2401_3097_2402_2903}>
              <View style={styles.View_I2401_3097_2402_2903_1348_11418} />
            </View>
          </View>
          <View style={styles.View_2401_3104}>
            <View style={styles.View_I2401_3104_2402_2899}>
              <View style={styles.View_I2401_3104_2402_2900}>
                <View style={styles.View_I2401_3104_2402_2901}>
                  <Text style={styles.Text_I2401_3104_2402_2901}>
                    What’s the company?
                  </Text>
                </View>
                <View style={styles.View_I2401_3104_2402_2902}>
                  <Text style={styles.Text_I2401_3104_2402_2902}>
                    A general overview that includes the name of the company,
                    year it was founded and its goal. For example: Company was
                    founded in 2019, with a goal to bring better products to
                    every home across the US.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2401_3104_2402_2903}>
              <View style={styles.View_I2401_3104_2402_2903_1348_11418} />
            </View>
          </View>
          <View style={styles.View_2401_3111}>
            <View style={styles.View_I2401_3111_2402_2899}>
              <View style={styles.View_I2401_3111_2402_2900}>
                <View style={styles.View_I2401_3111_2402_2901}>
                  <Text style={styles.Text_I2401_3111_2402_2901}>
                    What’s the company?
                  </Text>
                </View>
                <View style={styles.View_I2401_3111_2402_2902}>
                  <Text style={styles.Text_I2401_3111_2402_2902}>
                    A general overview that includes the name of the company,
                    year it was founded and its goal. For example: Company was
                    founded in 2019, with a goal to bring better products to
                    every home across the US.
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I2401_3111_2402_2903}>
              <View style={styles.View_I2401_3111_2402_2903_1348_11418} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 245, 245, 1)" },
  View_2: { height: hp("328%") },
  View_2401_2901: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2401_2901_2166_2675: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2401_2901_2166_2676: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_I2401_2901_2166_2677: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2401_2901_2166_2677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I2401_2901_1805_3119: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_2901_1802_2460: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_2901_1802_2460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_2901_1802_2462: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_2901_1802_2462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_2901_1802_2461: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_2901_1802_2461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_2901_1802_2463: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_2901_1802_2463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_2901_1805_3118: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_2901_1802_2464: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_2901_1802_2464_2341_5373: {
    flexGrow: 1,
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_2901_1802_2464_2341_5374: {
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_2901_1802_2464_2341_5375: {
    width: wp("16%"),
    minWidth: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2401_2901_1802_2464_2341_5375: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_2901_1802_2464_2341_5376: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2401_2901_1802_2464_2341_5376_1006_11594: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I2401_2901_1802_2459: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_I2401_2901_2342_3410: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_2401_3136: {
    width: wp("81%"),
    height: hp("129%"),
    minHeight: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2401_3122: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2401_3119: {
    width: wp("81%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2401_3119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2401_3120: {
    width: wp("81%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2401_3120: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2401_3123: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3123_2341_5319: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3123_2341_5320: {
    width: wp("81%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3123_2341_5321: {
    width: wp("74%"),
    minWidth: wp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3123_2341_5321: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_3123_2341_5322: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2401_3123_2341_5322_1006_11582: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_2401_3121: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("94%"),
    minHeight: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2401_3082: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3082_2402_2899: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2401_3082_2402_2900: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3082_2402_2901: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3082_2402_2901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_3082_2402_2902: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3082_2402_2902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_3082_2402_2903: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3082_2402_2903_1348_11418: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 183, 1)"
  },
  View_2401_3090: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3090_2402_2899: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2401_3090_2402_2900: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3090_2402_2901: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3090_2402_2901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_3090_2402_2902: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3090_2402_2902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_3090_2402_2903: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3090_2402_2903_1348_11418: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 183, 1)"
  },
  View_2401_3097: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3097_2402_2899: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2401_3097_2402_2900: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3097_2402_2901: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3097_2402_2901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_3097_2402_2902: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3097_2402_2902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_3097_2402_2903: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3097_2402_2903_1348_11418: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 183, 1)"
  },
  View_2401_3104: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3104_2402_2899: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2401_3104_2402_2900: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3104_2402_2901: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3104_2402_2901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_3104_2402_2902: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3104_2402_2902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_3104_2402_2903: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3104_2402_2903_1348_11418: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 183, 1)"
  },
  View_2401_3111: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3111_2402_2899: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2401_3111_2402_2900: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3111_2402_2901: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3111_2402_2901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2401_3111_2402_2902: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2401_3111_2402_2902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I2401_3111_2402_2903: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2401_3111_2402_2903_1348_11418: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(174, 179, 183, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
