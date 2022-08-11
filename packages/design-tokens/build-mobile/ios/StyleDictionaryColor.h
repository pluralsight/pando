
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Thu, 11 Aug 2022 15:23:00 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
PsBackground,
PsBackgroundActive,
PsBackgroundHover,
PsBorder,
PsBorderWeak,
PsBorderStrong,
PsSurface,
PsSurfaceWeak,
PsSurfaceMedium,
PsSurfaceStrong,
PsText,
PsTextWeak,
PsTextMedium,
PsActionBackground,
PsActionBackgroundActive,
PsActionBackgroundHover,
PsActionBackgroundWeak,
PsActionBackgroundWeakActive,
PsActionBackgroundWeakHover,
PsActionBorder,
PsActionText,
PsActionTextWeak,
PsActionTextMedium,
PsDangerBackground,
PsDangerBackgroundActive,
PsDangerBackgroundHover,
PsDangerBackgroundWeak,
PsDangerBorder,
PsDangerText,
PsDangerTextWeak,
PsDangerTextMedium,
PsInfoBackground,
PsInfoBackgroundActive,
PsInfoBackgroundHover,
PsInfoBackgroundWeak,
PsInfoBorder,
PsInfoText,
PsInfoTextWeak,
PsInfoTextMedium,
PsSuccessBackground,
PsSuccessBackgroundActive,
PsSuccessBackgroundHover,
PsSuccessBackgroundWeak,
PsSuccessBorder,
PsSuccessText,
PsSuccessTextWeak,
PsSuccessTextMedium,
PsWarningBackground,
PsWarningBackgroundActive,
PsWarningBackgroundHover,
PsWarningBackgroundWeak,
PsWarningBorder,
PsWarningText,
PsWarningTextWeak,
PsWarningTextMedium
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
