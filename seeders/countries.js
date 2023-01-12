'use strict';
// const faker = require('faker');

module.exports = {
    up :async (queryInterface, Sequelize)=>{

        await queryInterface.sequelize.query("ALTER TABLE countries AUTO_INCREMENT = 1;");

    var levels = [
    [ '93', 'Afghanistan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/afghanistan-162218.svg', 1],
    [ '355', 'Albania', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/albania-162220.svg', 1],
    [ '213', 'Algeria', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/algeria.svg', 1],
    [ '376', 'Andorra', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/andorra-162224.svg', 1],
    [ '244', 'Angola', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/angola-162225.svg', 1],
    [ '268', 'Antigua and Barbuda', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/57567062002421250262.Antigua-And-Barb.png', 1],
    [ '54', 'Argentina', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/argentina-162229.svg', 1],
    [ '374', 'Armenia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/armenia-162230.svg', 1],
    [ '297', 'Aruba', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/67939699435305226395.Flag_of_Aruba.svg.png', 1],
    [ '61', 'Australia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/australia-28586.svg', 1],
    [ '43', 'Austria', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/austria-26881.svg', 1],
    [ '994', 'Azerbaijan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/azerbaijan-4866530.svg', 1],
    [ '242', 'Bahamas', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/bahamas-162236.svg', 1],
    [ '973', 'Bahrain', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/bahrain-162237.svg', 1],
    [ '880', 'Bangladesh', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/bangladesh-162238.svg', 1],
    [ '246', 'Barbados', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/barbados-162239.svg', 1],
    [ '375', 'Belarus  ', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/belarus-26903.svg', 1],
    [ '32', 'Belgium', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/belgium-162240.svg', 1],
    [ '501', 'Belize', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/belize-26997.svg', 1],
    [ '229', 'Benin', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/benin-162242.svg', 1],
    [ '441', 'Bermuda', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/belize-26997.svg', 1],
    [ '975', 'Bhutan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/bhutan-162244.svg', 1],
    [ '591', 'Bolivia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/bolivia-162245.svg', 1],
    [ '387', 'Bosnia and Herzegovina', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/80308512906143382472.1920px-Flag_of_Bosnia_and_Herzegovina.svg.png', 1],
    [ '267', 'Botswana', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/53818269647593035787.botswana-162248.svg', 1],
    [ '55', 'Brazil', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/brazil-305531.svg', 1],
    [ '673', 'Brunei', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/brunei-26818.svg', 1],
    [ '359', 'Bulgaria', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/bulgaria-26877.svg', 1],
    [ '226', 'Burkina Faso', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/burkina-faso-162255.svg', 1],
    [ '257', 'Burundi', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/burundi-162256.svg', 1],
    [ '855', 'Cambodia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/cambodia-162257.svg', 1],
    [ '237', 'Cameroon', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/cameroon-35964.svg', 1],
    [ '1', 'Canada', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/canada-27003.svg', 1],
    [ '238', 'Cape Verde', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/cape-verde-162260.svg', 1],
    [ '236', 'Central African Republic', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/central-african-republic-162262.svg', 1],
    [ '235', 'Chad', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/chad-26940.svg', 1],
    [ '56', 'Chile', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/chile-162264.svg', 1],
    [ '86', 'China', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/china-162389.svg', 1],
    [ '57', 'Colombia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/colombia-35364.svg', 1],
    [ '269', 'Comoros', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/comoros-162268.svg', 1],
    [ '242', 'Congo (Congo-Brazzaville)', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/congo-162398.svg', 1],
    [ '243', 'Congo (Democratic Republic)', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/24935150433008596516.democratic-republic-of-the-congo-162277.svg', 1],
    [ '506', 'Costa Rica', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/70523695422944340805.costa-rica_whitout-coat.svg', 1],
    [ '225', 'Côte d\'Ivoire', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/30229409849478919962.c%C3%83%C2%B4te-d%27ivoire.svg', 1],
    [ '385', 'Croatia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/croatia-26888.svg', 1],
    [ '53', 'Cuba', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/cuba-149689.svg', 1],
    [ '357', 'Cyprus', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/cyprus.svg', 1],
    [ '420', 'Czechia (Czech Republic)', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/44927361091175863725.czechia-4880480.svg', 1],
    [ '45', 'Denmark', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/denmark-28459.svg', 1],
    [ '253', 'Djibouti', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/djibouti-162279.svg', 1],
    [ '767', 'Dominica', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/dominica-162280.svg', 1],
    [ '829', 'Dominican Republic', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/dominican-republic-162281.svg', 1],
    [ '670', 'Timor-Leste', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/93627161329548060787.timor-leste.svg', 1],
    [ '593', 'Ecuador', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/ecuador-162283.svg', 1],
    [ '20', 'Egypt', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/egypt-162284.svg', 1],
    [ '503', 'El Salvador', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/el-salvador-162285.svg', 1],
    [ '240', 'Equatorial Guinea', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/equatorial-guinea-162286.svg', 1],
    [ '291', 'Eritrea', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/eritrea-162287.svg', 1],
    [ '372', 'Estonia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/estonia-162288.svg', 1],
    [ '251', 'Ethiopia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/ethiopia-26943.svg', 1],
    [ '679', 'Fiji', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/fiji-162293.svg', 1],
    [ '358', 'Finland', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/finland-162294.svg', 1],
    [ '33', 'France', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/france-162295.svg', 1],
    [ '241', 'Gabon', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/gabon-4886333.svg', 1],
    [ '220', 'Gambia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/gambia-26941.svg', 1],
    [ '995', 'Georgia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/georgia-26839.svg', 1],
    [ '49', 'Germany', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/germany-31017.svg', 1],
    [ '233', 'Ghana', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/ghana-162302.svg', 1],
    [ '30', 'Greece', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/greece-162304.svg', 1],
    [ '473', 'Grenada', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/grenada-162306.svg', 1],
    [ '502', 'Guatemala', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/guatemala-162308.svg', 1],
    [ '224', 'Guinea', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/guinea-162311.svg', 1],
    [ '245', 'Guinea-Bissau', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/78794956129094411876.guinea-bissau-162310.svg', 1],
    [ '592', 'Guyana', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/guyana.svg', 1],
    [ '509', 'Haiti', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/haiti-162313.svg', 1],
    [ '504', 'Honduras', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/honduras-26972.svg', 1],
    [ '36', 'Hungary', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/hungary-162317.svg', 1],
    [  '354', 'Iceland', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/27298657219113015666.iceland-162318.svg', 1],
    [  '91', 'India', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/india-1617463.svg', 1],
    [  '62', 'Indonesia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/indonesia-26817.svg', 1],
    [  '98', 'Iran', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/iran-26826.svg', 1],
    [  '964', 'Iraq', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/iraq-26823.svg', 1],
    [  '353', 'Ireland', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/ireland-162323.svg', 1],
    [  '972', 'Israel', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/israel-162325.svg', 1],
    [  '39', 'Italy', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/italy-162326.svg', 1],
    [  '876', 'Jamaica', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/jamaica-162327.svg', 1],
    [  '81', 'Japan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/japan-162328.svg', 1],
    [  '962', 'Jordan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/jordan-162330.svg', 1],
    [  '7', 'Kazakhstan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/kazakhstan-162331.svg', 1],
    [  '254', 'Kenya', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/kenya-162332.svg', 1],
    [  '686', 'Kiribati', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/kiribati-31016.svg', 1],
    [  '850', 'North Korea', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/84975786657237130568.north-korea-40605.svg', 1],
    [  '82', 'South Korea', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/29758230597717709720.south-korea-162427.svg', 1],
    [  '965', 'Kuwait', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/kuwait-162335.svg', 1],
    [  '996', 'Kyrgyzstan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/kazakhstan-162331.svg', 1],
    [  '856', 'Laos', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/laos-162337.svg', 1],
    [  '371', 'Latvia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/latvia-162338.svg', 1],
    [  '961', 'Lebanon', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/lebanon-26832.svg', 1],
    [  '266', 'Lesotho', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/lesotho-162340.svg', 1],
    [  '231', 'Liberia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/liberia-162341.svg', 1],
    [  '218', 'Libya', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/libya.svg', 1],
    [  '423', 'Liechtenstein', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/liechtenstein-162343.svg', 1],
    [  '370', 'Lithuania', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/lithuania-162344.svg', 1],
    [  '352', 'Luxembourg', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/luxembourg-162345.svg', 1],
    [  '389', 'North Macedonia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/78542833107721428869.north-macedonia.svg', 1],
    [  '261', 'Madagascar', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/39497290139728666797.madagascar-26927.svg', 1],
    [  '265', 'Malawi', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/malawi-162350.svg', 1],
    [  '60', 'Malaysia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/malaysia-158869.svg', 1],
    [  '960', 'Maldives', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/maldives-162352.svg', 1],
    [  '223', 'Mali', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/mali-162353.svg', 1],
    [  '356', 'Malta', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/malta-162354.svg', 1],
    [  '692', 'Marshall Islands', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/marshall-islands-162355.svg', 1],
    [  '222', 'Mauritania', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/16396433434813830603.mauritania-false-flag.svg', 1],
    [  '230', 'Mauritius ', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/mauritius-162358.svg', 1],
    [  '52', 'Mexico', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/mexico-26989.svg', 1],
    [  '691', 'Micronesia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/micronesia.svg', 1],
    [  '373', 'Moldova', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/moldova-162360.svg', 1],
    [  '377', 'Monaco', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/monaco-162361.svg', 1],
    [  '976', 'Mongolia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/mongolia-26821.svg', 1],
    [  '382', 'Montenegro', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/montenegro-162363.svg', 1],
    [  '212', 'Morocco', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/morocco-162365.svg', 1],
    [  '258', 'Mozambique', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/mozambique-162366.svg', 1],
    [  '95', 'Myanmar', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/myanmar.svg', 1],
    [  '264', 'Namibia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/namibia-162368.svg', 1],
    [  '674', 'Nauru', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/nauru-28612.svg', 1],
    [  '977', 'Nepal', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/nepal-162370.svg', 1],
    [  '599', 'Bonaire', ' ', 1],
    [  '31', 'Netherlands', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/netherlands-26885.svg', 1],
    [  '64', 'New Zealand', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/35478814671888768423.new-zealand.svg', 1],
    [  '505', 'Nicaragua', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/nicaragua-26973.svg', 1],
    [  '227', 'Niger', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/niger-26925.svg', 1],
    [  '234', 'Nigeria', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/nigeria-162376.svg', 1],
    [  '47', 'Norway', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/norway-162381.svg', 1],
    [  '968', 'Oman', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/oman-26830.svg', 1],
    [  '92', 'Pakistan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/pakistan-162383.svg', 1],
    [  '680', 'Palau', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/palau.svg', 1],
    [  '970', 'Palestine (State)', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/53037363858197273845.palestine-26809.svg', 1],
    [  '507', 'Panama', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/panama-26998.svg', 1],
    [  '675', 'Papua new Guinea', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/papua-new-guinea-162387.svg', 1],
    [  '595', 'Paraguay', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/paraguay-162388.svg', 1],
    [  '51', 'Peru', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/peru.svg', 1],
    [  '63', 'Philippines', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/philippines-31013.svg', 1],
    [  '48', 'Poland', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/poland-162393.svg', 1],
    [  '351', 'Portugal', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/portugal-162394.svg', 1],
    [  '974', 'Qatar', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/qatar-162396.svg', 1],
    [  '40', 'Romania', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/romania-26883.svg', 1],
    [  '7', 'Russia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/russia-26896.svg', 1],
    [  '250', 'Rwanda', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/rwanda-26944.svg', 1],
    [  '869', 'Saint Kitts and Nevis', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/saint-kitts-and-nevis-26965.svg', 1],
    [  '758', 'Saint Lucia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/saint-lucia-26966.svg', 1],
    [  '784', 'Saint Vincent and the Grenadines', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/saint-vincent-and-the-grenadines.svg', 1],
    [  '685', 'Samoa', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/samoa-162409.svg', 1],
    [  '378', 'San Marino', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/san-marino-162410.svg', 1],
    [  '239', 'Sao Tome and Principe', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/sao-tome-and-principe-26948.svg', 1],
    [  '966', 'Saudi Arabia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/saudi-arabia-162413.svg', 1],
    [  '221', 'Senegal', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/senegal-162414.svg', 1],
    [  '381', 'Serbia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/serbia-162415.svg', 1],
    [  '248', 'Seychelles', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/seychelles-162416.svg', 1],
    [  '232', 'Sierra Leone', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/sierra-leone-162417.svg', 1],
    [  '65', 'Singapore', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/singapore-162418.svg', 1],
    [  '421', 'Slovakia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/slovakia-162421.svg', 1],
    [  '386', 'Slovenia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/slovenia-162422.svg', 1],
    [  '677', 'Solomon Islands', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/74573565896297983881.Solomon-Islands.svg', 1],
    [  '252', 'Somalia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/somalia-162424.svg', 1],
    [  '27', 'South Africa', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/south-africa-162425.svg', 1],
    [  '211', 'South Sudan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/14443223915771317103.south-sudan.svg', 1],
    [  '34', 'Spain', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/spain-162428.svg', 1],
    [  '94', 'Sri Lanka', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/sri-lanka-162429.svg', 1],
    [  '249', 'Sudan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/sudan-162430.svg', 1],
    [  '597', 'Suriname', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/suriname-162431.svg', 1],
    [  '268', 'Eswatini (Swaziland)', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/40841855920136485576.Eswatini%28swaziland%29-162432.svg', 1],
    [  '46', 'Sweden', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/29439109935994074791.sweden.svg', 1],
    [  '41', 'Switzerland', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/switzerland-26891.svg', 1],
    [  '963', 'Syria', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/syria-162435.svg', 1],
    [  '886', 'Taiwan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/60974254942380141528.taiwan-26129.svg', 1],
    [  '992', 'Tajikistan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/tajikistan-162436.svg', 1],
    [  '255', 'Tanzania', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/tanzania-26950.svg', 1],
    [  '66', 'Thailand', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/thailand-26813.svg', 1],
    [  '228', 'Togo', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/togo-162439.svg', 1],
    [  '676', 'Tonga', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/tonga-162441.svg', 1],
    [  '868', 'Trinidad and Tobago', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/trinidad-and-tobago-162442.svg', 1],
    [  '216', 'Tunisia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/tunisia-162444.svg', 1],
    [  '90', 'Turkey', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/turkey-26820.svg', 1],
    [  '993', 'Turkmenistan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/turkmenistan-162446.svg', 1],
    [  '688', 'Tuvalu', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/tuvalu-162448.svg', 1],
    [  '256', 'Uganda', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/uganda-162449.svg', 1],
    [  '380', 'Ukraine', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/ukraine-26179.svg', 1],
    [  '971', 'United Arab Emirates', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/united-arab-emirates-26815.svg', 1],
    [  '44', 'United Kingdom', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/united-kingdom.svg', 1],
    [  '1', 'United States of America', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/15250166844618044786.USA.svg', 1],
    [  '598', 'Uruguay', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/uruguay-162455.svg', 1],
    [  '998', 'Uzbekistan', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/74125789211755133208.uzbekistan-162456.svg', 1],
    [  '678', 'Vanuatu', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/vanuatu-162457.svg', 1],
    [  '379', 'Vatican City', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/68911666797031026910.vatican%28holy-see%29-26894.svg', 1],
    [  '58', 'Venezuela', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/venezuela-148036.svg', 1],
    [  '84', 'Vietnam', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/vietnam-162460.svg', 1],
    [  '967', 'Yemen', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/yemen-162463.svg', 1],
    [  '260', 'Zambia', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/zambia-162464.svg', 1],
    [  '263', 'Zimbabwe', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/Countries/zimbabwe-26916.svg', 1],
    [  '383', 'Kosovo', 'https://zleetz-assets.s3.eu-north-1.amazonaws.com/content/countryFlag/66276318400916234809.kosovo-162334.svg', 1]];


    var new_data = []
  for(var i = 0 ; i < levels.length; i++){
      new_data.push({
        country_code : levels[i][0],
        name : levels[i][1],
        flag : levels[i][2],
        status : levels[i][3]

    });
  }
      return queryInterface.bulkInsert('countries', new_data,{} );
  },

  down : async (queryInterface, Sequelize) =>{


      return queryInterface.bulkDelete('countries', );
  }
};
