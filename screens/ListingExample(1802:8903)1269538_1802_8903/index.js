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
      <View style={styles.View_1832_2391}>
        <View style={styles.View_I1832_2391_2166_2675}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d59/efd3/bcb5ff922ef460a117ebcf9740fcfcc5"
            }}
            style={styles.ImageBackground_I1832_2391_2166_2676}
          />
          <View style={styles.View_I1832_2391_2166_2677}>
            <Text style={styles.Text_I1832_2391_2166_2677}>Logo</Text>
          </View>
        </View>
        <View style={styles.View_I1832_2391_1805_3119}>
          <View style={styles.View_I1832_2391_1802_2460}>
            <Text style={styles.Text_I1832_2391_1802_2460}>Dashboard</Text>
          </View>
          <View style={styles.View_I1832_2391_1802_2462}>
            <Text style={styles.Text_I1832_2391_1802_2462}>Jobs</Text>
          </View>
          <View style={styles.View_I1832_2391_1802_2461}>
            <Text style={styles.Text_I1832_2391_1802_2461}>Applicants</Text>
          </View>
          <View style={styles.View_I1832_2391_1802_2463}>
            <Text style={styles.Text_I1832_2391_1802_2463}>Company</Text>
          </View>
        </View>
        <View style={styles.View_I1832_2391_1805_3118}>
          <View style={styles.View_I1832_2391_1802_2464}>
            <View style={styles.View_I1832_2391_1802_2464_2341_5373}>
              <View style={styles.View_I1832_2391_1802_2464_2341_5374}>
                <View style={styles.View_I1832_2391_1802_2464_2341_5375}>
                  <Text style={styles.Text_I1832_2391_1802_2464_2341_5375}>
                    Placeholder
                  </Text>
                </View>
                <View style={styles.View_I1832_2391_1802_2464_2341_5376}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95c6/da65/c317a2f7a18fd952dc963fcb8bcca157"
                    }}
                    style={
                      styles.ImageBackground_I1832_2391_1802_2464_2341_5376_1006_11594
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
            style={styles.ImageBackground_I1832_2391_1802_2459}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d0a9/1677/2fe5ccd2922aef190d66901367f289cb"
            }}
            style={styles.ImageBackground_I1832_2391_2342_3410}
          />
        </View>
      </View>
      <View style={styles.View_1832_2413}>
        <View style={styles.View_I1832_2413_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2413_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2413_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2413_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2413_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2413_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2413_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2413_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2413_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2413_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2626}>
        <View style={styles.View_I1832_2626_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2626_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2626_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2626_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2626_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2626_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2626_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2626_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2626_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2626_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2658}>
        <View style={styles.View_I1832_2658_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2658_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2658_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2658_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2658_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2658_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2658_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2658_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2658_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2658_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3430}>
        <View style={styles.View_I1832_3430_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_3430_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_3430_1020_12824_1558_5806}>
            <View style={styles.View_I1832_3430_1020_12824_1558_5807}>
              <View style={styles.View_I1832_3430_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_3430_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_3430_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_3430_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_3430_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_3430_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2445}>
        <View style={styles.View_I1832_2445_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2445_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2445_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2445_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2445_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2445_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2445_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2445_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2445_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2445_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2627}>
        <View style={styles.View_I1832_2627_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2627_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2627_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2627_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2627_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2627_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2627_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2627_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2627_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2627_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2659}>
        <View style={styles.View_I1832_2659_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2659_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2659_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2659_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2659_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2659_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2659_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2659_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2659_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2659_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3431}>
        <View style={styles.View_I1832_3431_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_3431_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_3431_1020_12824_1558_5806}>
            <View style={styles.View_I1832_3431_1020_12824_1558_5807}>
              <View style={styles.View_I1832_3431_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_3431_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_3431_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_3431_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_3431_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_3431_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2421}>
        <View style={styles.View_I1832_2421_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2421_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2421_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2421_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2421_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2421_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2421_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2421_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2421_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2421_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2628}>
        <View style={styles.View_I1832_2628_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2628_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2628_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2628_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2628_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2628_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2628_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2628_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2628_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2628_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2660}>
        <View style={styles.View_I1832_2660_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2660_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2660_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2660_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2660_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2660_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2660_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2660_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2660_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2660_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3432}>
        <View style={styles.View_I1832_3432_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_3432_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_3432_1020_12824_1558_5806}>
            <View style={styles.View_I1832_3432_1020_12824_1558_5807}>
              <View style={styles.View_I1832_3432_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_3432_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_3432_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_3432_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_3432_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_3432_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2446}>
        <View style={styles.View_I1832_2446_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2446_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2446_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2446_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2446_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2446_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2446_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2446_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2446_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2446_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2629}>
        <View style={styles.View_I1832_2629_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2629_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2629_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2629_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2629_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2629_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2629_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2629_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2629_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2629_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2661}>
        <View style={styles.View_I1832_2661_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_2661_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_2661_1020_12824_1558_5806}>
            <View style={styles.View_I1832_2661_1020_12824_1558_5807}>
              <View style={styles.View_I1832_2661_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_2661_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_2661_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_2661_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_2661_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_2661_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3433}>
        <View style={styles.View_I1832_3433_1020_12824}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/e05d/415d72ef3b8cdc5d28808182a9749adb"
            }}
            style={styles.ImageBackground_I1832_3433_1020_12824_1558_5805}
          />
          <View style={styles.View_I1832_3433_1020_12824_1558_5806}>
            <View style={styles.View_I1832_3433_1020_12824_1558_5807}>
              <View style={styles.View_I1832_3433_1020_12824_1558_5810}>
                <Text style={styles.Text_I1832_3433_1020_12824_1558_5810}>
                  $1,199,950
                </Text>
              </View>
              <View style={styles.View_I1832_3433_1020_12824_1558_5808}>
                <Text style={styles.Text_I1832_3433_1020_12824_1558_5808}>
                  4bds 3 ba 2,530 sqft - Active
                </Text>
              </View>
              <View style={styles.View_I1832_3433_1020_12824_1558_5809}>
                <Text style={styles.Text_I1832_3433_1020_12824_1558_5809}>
                  832 34th Ave, Seattle, WA 98122
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_2461} />
      <View style={styles.View_1832_2462}>
        <View style={styles.View_I1832_2462_2341_4025}>
          <View style={styles.View_I1832_2462_2341_4026}>
            <View style={styles.View_I1832_2462_2341_4027}>
              <Text style={styles.Text_I1832_2462_2341_4027}>Placeholder</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7244/b3d1/88325a9b197bdaedd206134aded88345"
              }}
              style={styles.ImageBackground_I1832_2462_2341_4028}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3373}>
        <View style={styles.View_I1832_3373_2341_5924}>
          <View style={styles.View_I1832_3373_2341_5925}>
            <View style={styles.View_I1832_3373_2341_5926}>
              <Text style={styles.Text_I1832_3373_2341_5926}>Placeholder</Text>
            </View>
            <View style={styles.View_I1832_3373_2341_5927}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03db/0b24/d8544fd6c7044486208cbfa52ee6cd70"
                }}
                style={styles.ImageBackground_I1832_3373_2341_5927_1006_11606}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1832_3404}>
        <View style={styles.View_I1832_3404_1348_11418} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(245, 245, 245, 1)" },
  View_2: { height: hp("328%") },
  View_1832_2391: {
    width: wp("100%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2391_2166_2675: {
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
  ImageBackground_I1832_2391_2166_2676: {
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
  View_I1832_2391_2166_2677: {
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
  Text_I1832_2391_2166_2677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I1832_2391_1805_3119: {
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
  View_I1832_2391_1802_2460: {
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
  Text_I1832_2391_1802_2460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2391_1802_2462: {
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
  Text_I1832_2391_1802_2462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2391_1802_2461: {
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
  Text_I1832_2391_1802_2461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2391_1802_2463: {
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
  Text_I1832_2391_1802_2463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2391_1805_3118: {
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
  View_I1832_2391_1802_2464: {
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
  View_I1832_2391_1802_2464_2341_5373: {
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
  View_I1832_2391_1802_2464_2341_5374: {
    width: wp("21%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2391_1802_2464_2341_5375: {
    width: wp("16%"),
    minWidth: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2391_1802_2464_2341_5375: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2391_1802_2464_2341_5376: {
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
  ImageBackground_I1832_2391_1802_2464_2341_5376_1006_11594: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I1832_2391_1802_2459: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_I1832_2391_2342_3410: {
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
  View_1832_2413: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2413_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2413_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2413_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2413_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2413_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2413_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2413_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2413_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2413_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2413_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2626: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2626_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2626_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2626_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2626_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2626_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2626_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2626_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2626_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2626_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2626_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2658: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2658_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2658_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2658_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2658_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2658_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2658_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2658_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2658_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2658_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2658_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_3430: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3430_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3430_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3430_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3430_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3430_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3430_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_3430_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3430_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3430_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3430_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2445: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2445_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2445_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2445_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2445_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2445_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2445_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2445_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2445_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2445_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2445_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2627: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2627_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2627_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2627_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2627_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2627_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2627_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2627_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2627_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2627_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2627_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2659: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2659_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2659_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2659_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2659_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2659_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2659_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2659_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2659_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2659_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2659_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_3431: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3431_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3431_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3431_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3431_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3431_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3431_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_3431_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3431_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3431_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3431_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2421: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2421_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2421_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2421_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2421_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2421_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2421_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2421_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2421_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2421_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2421_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2628: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2628_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2628_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2628_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2628_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2628_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2628_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2628_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2628_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2628_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2628_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2660: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2660_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2660_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2660_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2660_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2660_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2660_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2660_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2660_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2660_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2660_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_3432: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3432_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3432_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3432_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3432_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3432_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3432_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_3432_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3432_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3432_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3432_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2446: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2446_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2446_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2446_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2446_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2446_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2446_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2446_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2446_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2446_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2446_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2629: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2629_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2629_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2629_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2629_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2629_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2629_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2629_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2629_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2629_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2629_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2661: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_2661_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_2661_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_2661_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2661_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2661_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2661_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_2661_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2661_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_2661_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2661_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_3433: {
    width: wp("19%"),
    height: hp("38%"),
    top: hp("317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1832_3433_1020_12824: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1832_3433_1020_12824_1558_5805: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I1832_3433_1020_12824_1558_5806: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3433_1020_12824_1558_5807: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3433_1020_12824_1558_5810: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3433_1020_12824_1558_5810: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_3433_1020_12824_1558_5808: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3433_1020_12824_1558_5808: {
    color: "rgba(13, 26, 38, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1832_3433_1020_12824_1558_5809: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3433_1020_12824_1558_5809: {
    color: "rgba(48, 64, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1832_2461: {
    width: wp("49%"),
    height: hp("316%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1832_2462: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2462_2341_4025: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2462_2341_4026: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_2462_2341_4027: {
    width: wp("8%"),
    minWidth: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_2462_2341_4027: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1832_2462_2341_4028: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_1832_3373: {
    width: wp("27%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3373_2341_5924: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3373_2341_5925: {
    width: wp("27%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3373_2341_5926: {
    width: wp("23%"),
    minWidth: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I1832_3373_2341_5926: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1832_3373_2341_5927: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1832_3373_2341_5927_1006_11606: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_1832_3404: {
    width: wp("39%"),
    height: hp("0%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1832_3404_1348_11418: {
    flexGrow: 1,
    width: wp("39%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(239, 240, 240, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
