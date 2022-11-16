
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Wed, 16 Nov 2022 17:23:14 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.224f green:0.231f blue:0.420f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.263f blue:0.463f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.176f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.263f blue:0.463f alpha:1.000f],
[UIColor colorWithRed:0.176f green:0.176f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.345f green:0.373f blue:0.635f alpha:1.000f],
[UIColor colorWithRed:0.075f green:0.059f blue:0.145f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.094f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.129f blue:0.271f alpha:1.000f],
[UIColor colorWithRed:0.165f green:0.153f blue:0.325f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.953f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.824f blue:0.902f alpha:1.000f],
[UIColor colorWithRed:0.545f green:0.565f blue:0.757f alpha:1.000f],
[UIColor colorWithRed:0.647f green:0.667f blue:0.812f alpha:1.000f],
[UIColor colorWithRed:0.953f green:0.953f blue:0.973f alpha:1.000f],
[UIColor colorWithRed:0.075f green:0.059f blue:0.145f alpha:1.000f],
[UIColor colorWithRed:0.290f green:0.200f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.235f green:0.157f blue:0.694f alpha:1.000f],
[UIColor colorWithRed:0.188f green:0.125f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.094f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:0.188f green:0.125f blue:0.553f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.094f blue:0.416f alpha:1.000f],
[UIColor colorWithRed:0.408f green:0.333f blue:0.851f alpha:1.000f],
[UIColor colorWithRed:0.220f green:0.584f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.220f green:0.584f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.220f green:0.584f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.694f green:0.490f blue:0.831f alpha:1.000f],
[UIColor colorWithRed:0.882f green:0.867f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.643f green:0.600f blue:0.910f alpha:1.000f],
[UIColor colorWithRed:0.525f green:0.467f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:0.882f green:0.867f blue:0.969f alpha:1.000f],
[UIColor colorWithRed:0.725f green:0.000f blue:0.294f alpha:1.000f],
[UIColor colorWithRed:0.545f green:0.000f blue:0.220f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.000f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.086f blue:0.459f alpha:1.000f],
[UIColor colorWithRed:0.361f green:0.000f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.941f blue:0.965f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.635f blue:0.784f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.451f blue:0.675f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.941f blue:0.965f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.639f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.212f blue:0.333f alpha:1.000f],
[UIColor colorWithRed:0.835f green:0.941f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.502f green:0.820f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.169f green:0.698f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.878f blue:0.533f alpha:1.000f],
[UIColor colorWithRed:0.004f green:0.294f blue:0.176f alpha:1.000f],
[UIColor colorWithRed:0.816f green:1.000f blue:0.925f alpha:1.000f],
[UIColor colorWithRed:0.263f green:0.992f blue:0.706f alpha:1.000f],
[UIColor colorWithRed:0.008f green:0.733f blue:0.443f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.729f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.420f green:0.298f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.965f blue:0.878f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.894f blue:0.631f alpha:1.000f],
[UIColor colorWithRed:1.000f green:0.824f blue:0.384f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
