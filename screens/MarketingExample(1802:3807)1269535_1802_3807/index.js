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
      <View style={styles.View_1832_2283}>
        <View style={styles.View_I1832_2283_1311_12114}>
          <View style={styles.View_I1832_2283_1311_12104}>
            <View style={styles.View_I1832_2283_1300_11904}>
              <Text style={styles.Text_I1832_2283_1300_11904}>Feature A</Text>
            </View>
            <View style={styles.View_I1832_2283_1300_11908}>
              <Text style={styles.Text_I1832_2283_1300_11908}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </Text>
            </View>
          </View>
          <View style={styles.View_I1832_2283_1311_12105}>
            <View style={styles.View_I1832_2283_1311_12106}>
              <Text style={styles.Text_I1832_2283_1311_12106}>Feature B</Text>
            </View>
            <View style={styles.View_I1832_2283_1311_12107}>
              <Text style={styles.Text_I1832_2283_1311_12107}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </Text>
            </View>
          </View>
          <View style={styles.View_I1832_2283_1311_12108}>
            <View style={styles.View_I1832_2283_1311_12109}>
              <Text style={styles.Text_I1832_2283_1311_12109}>Feature C</Text>
            </View>
            <View style={styles.View_I1832_2283_1311_12110}>
              <Text style={styles.Text_I1832_2283_1311_12110}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </Text>
            </View>
          </View>
          <View style={styles.View_I1832_2283_1311_12111}>
            <View style={styles.View_I1832_2283_1311_12112}>
              <Text style={styles.Text_I1832_2283_1311_12112}>Feature D</Text>
            </View>
            <View style={styles.View_I1832_2283_1311_12113}>
              <Text style={styles.Text_I1832_2283_1311_12113}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2297}>
        <View style={styles.View_I1832_2297_1329_11500}>
          <View style={styles.View_I1832_2297_1311_12097}>
            <View style={styles.View_I1832_2297_1311_12098}>
              <View style={styles.View_I1832_2297_1311_12099}>
                <Text style={styles.Text_I1832_2297_1311_12099}>Feature A</Text>
              </View>
              <View style={styles.View_I1832_2297_1311_12100}>
                <Text style={styles.Text_I1832_2297_1311_12100}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </View>
            </View>
            <View style={styles.View_I1832_2297_1311_12093}>
              <View style={styles.View_I1832_2297_1300_11912}>
                <Text style={styles.Text_I1832_2297_1300_11912}>Feature B</Text>
              </View>
              <View style={styles.View_I1832_2297_1300_11914}>
                <Text style={styles.Text_I1832_2297_1300_11914}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1832_2297_1329_11493}>
            <View style={styles.View_I1832_2297_1329_11494}>
              <View style={styles.View_I1832_2297_1329_11495}>
                <Text style={styles.Text_I1832_2297_1329_11495}>Feature C</Text>
              </View>
              <View style={styles.View_I1832_2297_1329_11496}>
                <Text style={styles.Text_I1832_2297_1329_11496}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </View>
            </View>
            <View style={styles.View_I1832_2297_1329_11497}>
              <View style={styles.View_I1832_2297_1329_11498}>
                <Text style={styles.Text_I1832_2297_1329_11498}>Feature D</Text>
              </View>
              <View style={styles.View_I1832_2297_1329_11499}>
                <Text style={styles.Text_I1832_2297_1329_11499}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2313}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4615/cd28/32c1dd42070650056dd983f7bd326318"
          }}
          style={styles.ImageBackground_I1832_2313_1471_3705}
        />
        <View style={styles.View_I1832_2313_1471_3706}>
          <View style={styles.View_I1832_2313_1471_3706_1311_12238}>
            <View style={styles.View_I1832_2313_1471_3706_1311_12239}>
              <Text style={styles.Text_I1832_2313_1471_3706_1311_12239}>
                LOREM IPSUM
              </Text>
            </View>
            <View style={styles.View_I1832_2313_1471_3706_1311_12240}>
              <View style={styles.View_I1832_2313_1471_3706_1311_12241}>
                <Text style={styles.Text_I1832_2313_1471_3706_1311_12241}>
                  Ut enim ad minim veniam quis nostrud
                </Text>
              </View>
              <View style={styles.View_I1832_2313_1471_3706_1311_12242}>
                <Text style={styles.Text_I1832_2313_1471_3706_1311_12242}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </Text>
              </View>
            </View>
            <View style={styles.View_I1832_2313_1471_3706_1311_12243}>
              <View
                style={styles.View_I1832_2313_1471_3706_1311_12243_1006_11545}
              >
                <Text
                  style={styles.Text_I1832_2313_1471_3706_1311_12243_1006_11545}
                >
                  Primary Button
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3406}>
        <View style={styles.View_I1832_3406_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485a/61af/c31678e104f8c3b23b5732ef0de975b9"
            }}
            style={styles.ImageBackground_I1832_3406_1020_12824_1558_5791}
          />
          <View style={styles.View_I1832_3406_1020_12824_1558_5793}>
            <View style={styles.View_I1832_3406_1020_12824_1558_5794}>
              <Text style={styles.Text_I1832_3406_1020_12824_1558_5794}>
                Classic Long Sleeve T-Shirt
              </Text>
            </View>
            <View style={styles.View_I1832_3406_1020_12824_1558_5795}>
              <Text style={styles.Text_I1832_3406_1020_12824_1558_5795}>
                $29.95
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3418}>
        <View style={styles.View_I1832_3418_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485a/61af/c31678e104f8c3b23b5732ef0de975b9"
            }}
            style={styles.ImageBackground_I1832_3418_1020_12824_1558_5791}
          />
          <View style={styles.View_I1832_3418_1020_12824_1558_5793}>
            <View style={styles.View_I1832_3418_1020_12824_1558_5794}>
              <Text style={styles.Text_I1832_3418_1020_12824_1558_5794}>
                Classic Long Sleeve T-Shirt
              </Text>
            </View>
            <View style={styles.View_I1832_3418_1020_12824_1558_5795}>
              <Text style={styles.Text_I1832_3418_1020_12824_1558_5795}>
                $29.95
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3412}>
        <View style={styles.View_I1832_3412_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485a/61af/c31678e104f8c3b23b5732ef0de975b9"
            }}
            style={styles.ImageBackground_I1832_3412_1020_12824_1558_5791}
          />
          <View style={styles.View_I1832_3412_1020_12824_1558_5793}>
            <View style={styles.View_I1832_3412_1020_12824_1558_5794}>
              <Text style={styles.Text_I1832_3412_1020_12824_1558_5794}>
                Classic Long Sleeve T-Shirt
              </Text>
            </View>
            <View style={styles.View_I1832_3412_1020_12824_1558_5795}>
              <Text style={styles.Text_I1832_3412_1020_12824_1558_5795}>
                $29.95
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3419}>
        <View style={styles.View_I1832_3419_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/485a/61af/c31678e104f8c3b23b5732ef0de975b9"
            }}
            style={styles.ImageBackground_I1832_3419_1020_12824_1558_5791}
          />
          <View style={styles.View_I1832_3419_1020_12824_1558_5793}>
            <View style={styles.View_I1832_3419_1020_12824_1558_5794}>
              <Text style={styles.Text_I1832_3419_1020_12824_1558_5794}>
                Classic Long Sleeve T-Shirt
              </Text>
            </View>
            <View style={styles.View_I1832_3419_1020_12824_1558_5795}>
              <Text style={styles.Text_I1832_3419_1020_12824_1558_5795}>
                $29.95
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2325}>
        <View style={styles.View_I1832_2325_2166_2675}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/efd3/bcb5ff922ef460a117ebcf9740fcfcc5"
            }}
            style={styles.ImageBackground_I1832_2325_2166_2676}
          />
          <View style={styles.View_I1832_2325_2166_2677}>
            <Text style={styles.Text_I1832_2325_2166_2677}>Logo</Text>
          </View>
        </View>
        <View style={styles.View_I1832_2325_1805_3119}>
          <View style={styles.View_I1832_2325_1802_2460}>
            <Text style={styles.Text_I1832_2325_1802_2460}>Dashboard</Text>
          </View>
          <View style={styles.View_I1832_2325_1802_2462}>
            <Text style={styles.Text_I1832_2325_1802_2462}>Jobs</Text>
          </View>
          <View style={styles.View_I1832_2325_1802_2461}>
            <Text style={styles.Text_I1832_2325_1802_2461}>Applicants</Text>
          </View>
          <View style={styles.View_I1832_2325_1802_2463}>
            <Text style={styles.Text_I1832_2325_1802_2463}>Company</Text>
          </View>
        </View>
        <View style={styles.View_I1832_2325_1805_3118}>
          <View style={styles.View_I1832_2325_1802_2464}>
            <View style={styles.View_I1832_2325_1802_2464_2341_5373}>
              <View style={styles.View_I1832_2325_1802_2464_2341_5374}>
                <View style={styles.View_I1832_2325_1802_2464_2341_5375}>
                  <Text style={styles.Text_I1832_2325_1802_2464_2341_5375}>
                    Placeholder
                  </Text>
                </View>
                <View style={styles.View_I1832_2325_1802_2464_2341_5376}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95c6/da65/c317a2f7a18fd952dc963fcb8bcca157"
                    }}
                    style={
                      styles.ImageBackground_I1832_2325_1802_2464_2341_5376_1006_11594
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
            style={styles.ImageBackground_I1832_2325_1802_2459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a9/1677/2fe5ccd2922aef190d66901367f289cb"
            }}
            style={styles.ImageBackground_I1832_2325_2342_3410}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("328%") },
  View_1832_2283: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("135%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  },
  View_I1832_2283_1311_12114: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2283_1311_12104: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2283_1300_11904: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1300_11904: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1300_11908: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1300_11908: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1311_12105: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2283_1311_12106: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1311_12106: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1311_12107: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1311_12107: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1311_12108: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2283_1311_12109: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1311_12109: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1311_12110: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1311_12110: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1311_12111: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2283_1311_12112: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1311_12112: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2283_1311_12113: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2283_1311_12113: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2297: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("106%"),
    minHeight: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("245%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2297_1329_11500: {
    flexGrow: 1,
    width: wp("81%"),
    height: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2297_1311_12097: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2297_1311_12098: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 250, 237, 1)"
  },
  View_I1832_2297_1311_12099: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1311_12099: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2297_1311_12100: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1311_12100: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2297_1311_12093: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 250, 237, 1)"
  },
  View_I1832_2297_1300_11912: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1300_11912: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2297_1300_11914: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1300_11914: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2297_1329_11493: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2297_1329_11494: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 250, 237, 1)"
  },
  View_I1832_2297_1329_11495: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1329_11495: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2297_1329_11496: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1329_11496: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2297_1329_11497: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 250, 237, 1)"
  },
  View_I1832_2297_1329_11498: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1329_11498: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2297_1329_11499: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2297_1329_11499: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1832_2313: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("117%"),
    minHeight: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_2313_1471_3705: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2313_1471_3706: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("117%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    overflow: "hidden"
  },
  View_I1832_2313_1471_3706_1311_12238: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2313_1471_3706_1311_12239: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2313_1471_3706_1311_12239: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.64,
    textTransform: "none"
  },
  View_I1832_2313_1471_3706_1311_12240: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2313_1471_3706_1311_12241: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2313_1471_3706_1311_12241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2313_1471_3706_1311_12242: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2313_1471_3706_1311_12242: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2313_1471_3706_1311_12243: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("46%"),
    backgroundColor: "rgba(4, 125, 149, 1)"
  },
  View_I1832_2313_1471_3706_1311_12243_1006_11545: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2313_1471_3706_1311_12243_1006_11545: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.8,
    textTransform: "none"
  },
  View_1832_3406: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("175%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3406_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3406_1020_12824_1558_5791: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3406_1020_12824_1558_5793: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3406_1020_12824_1558_5794: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3406_1020_12824_1558_5794: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3406_1020_12824_1558_5795: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3406_1020_12824_1558_5795: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1832_3418: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("175%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3418_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3418_1020_12824_1558_5791: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3418_1020_12824_1558_5793: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3418_1020_12824_1558_5794: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3418_1020_12824_1558_5794: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3418_1020_12824_1558_5795: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3418_1020_12824_1558_5795: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1832_3412: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("175%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3412_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3412_1020_12824_1558_5791: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3412_1020_12824_1558_5793: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3412_1020_12824_1558_5794: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3412_1020_12824_1558_5794: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3412_1020_12824_1558_5795: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3412_1020_12824_1558_5795: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1832_3419: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("175%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3419_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3419_1020_12824_1558_5791: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3419_1020_12824_1558_5793: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("57%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3419_1020_12824_1558_5794: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3419_1020_12824_1558_5794: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3419_1020_12824_1558_5795: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3419_1020_12824_1558_5795: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1832_2325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2325_2166_2675: {
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
  ImageBackground_I1832_2325_2166_2676: {
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
  View_I1832_2325_2166_2677: {
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
  Text_I1832_2325_2166_2677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I1832_2325_1805_3119: {
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
  View_I1832_2325_1802_2460: {
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
  Text_I1832_2325_1802_2460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2325_1802_2462: {
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
  Text_I1832_2325_1802_2462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2325_1802_2461: {
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
  Text_I1832_2325_1802_2461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2325_1802_2463: {
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
  Text_I1832_2325_1802_2463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2325_1805_3118: {
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
  View_I1832_2325_1802_2464: {
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
  View_I1832_2325_1802_2464_2341_5373: {
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
  View_I1832_2325_1802_2464_2341_5374: {
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2325_1802_2464_2341_5375: {
    width: wp("16%"),
    minWidth: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2325_1802_2464_2341_5375: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2325_1802_2464_2341_5376: {
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
  ImageBackground_I1832_2325_1802_2464_2341_5376_1006_11594: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I1832_2325_1802_2459: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_I1832_2325_2342_3410: {
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
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
